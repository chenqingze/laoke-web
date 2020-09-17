import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {BehaviorSubject, Observable} from 'rxjs';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';


@Injectable()
export class DbService {
    private window: any = window;
    storage: SQLiteObject | any;
    private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private dbName: string;
    readonly createTableSqlStatements: string [] = [
        // todo:完善需要创建的表 sql,这里写了个测试
            `CREATE TABLE IF NOT EXISTS testTab( id INTEGER PRIMARY KEY AUTOINCREMENT, artist_name TEXT, song_name TEXT)`
    ];

    constructor(private platform: Platform,
                private sqlite: SQLite) {
        this.platform.ready().then(() => {
            this.initDB().then(() => console.log('database init complete ! '));
        }).catch(error => {
            console.log(error);
        });
    }

    /**
     * init database
     * @private
     */
    private async initDB() {
        // todo:完善从localStorage获取用户信息作为数据库命名，这里写死一个用于开发
        // this.dbName='im_'+localStorage.getItem('username')+'.db';
        this.dbName = 'userId_im.db';
        if (!this.platform.is('cordova')) {
            // 设置数据库大小
            this.storage = browserDbExtend(this.window.openDatabase(this.dbName, '1.0', '消息数据库', 10 * 1024 * 1024));
        } else {
            this.storage = await this.sqlite.create({
                name: this.dbName,
                location: 'default'
            });
        }
        console.log(' database is created success !');
        // 创建数据库表
        this.createTables().then((result) => {
            console.log('table is created success ? ', result);
            this.isDbReady.next(true);
        }).catch(e => {
            console.log('create table error', JSON.stringify(e));
        });
    }

    /**
     * Create table
     * @private
     */
    private createTables(): Promise<any> {
        return this.storage.sqlBatch(this.createTableSqlStatements)
            .then(() => {
                console.log(' table is created success !');
                return true;
            });
    }

    /**
     * subscribe database available status
     */
    dbReady$(): Observable<boolean> {
        return this.isDbReady.asObservable();
    }


}


export const browserDbExtend = (db) => {

    return {
        executeSql: (statement: string, params?: any[]) => {
            return new Promise((resolve, reject) => {
                db.transaction((tx) => {
                    tx.executeSql(statement, params, (t, res) => {
                        resolve(res);
                        // resolve({t, res});
                    }, (t, err) => {
                        reject({err});
                        // reject({t, err});
                    });
                });
            });
        },

        sqlBatch: (arr) => {
            return new Promise((r, rj) => {
                const batch = [];
                db.transaction((tx) => {
                    for (const item of arr) {
                        batch.push(new Promise((resolve, reject) => {
                            tx.executeSql(item, [], () => {
                                resolve(true);
                            });
                        }));
                        Promise.all(batch).then(() => r(true));
                    }
                });
            });
        }
    };
};