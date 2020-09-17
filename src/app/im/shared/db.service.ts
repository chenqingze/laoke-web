import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {BehaviorSubject, Observable} from 'rxjs';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

@Injectable()
export class DbService {
    storage: SQLiteObject;
    private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private dbName: string;
    readonly createTableSqlStatements: string [] = [
        // todo:完善需要创建的表 sql,这里写了个测试
            `CREATE TABLE IF NOT EXISTS testTab( id INTEGER PRIMARY KEY AUTOINCREMENT, artist_name TEXT, song_name TEXT)`
    ];

    constructor(private platform: Platform,
                private sqlite: SQLite) {
        // todo:完善从localStorage获取用户信息作为数据库命名，这里写死一个用于开发
        // this.dbName='im_'+localStorage.getItem('username')+'.db';
        this.dbName = 'userId_im.db';

        this.platform.ready().then(() => {
            this.initDB();
        }).catch(error => {
            console.log(error);
        });
    }

    /**
     * init database
     * @private
     */
    private initDB() {
        this.sqlite.create({
            name: this.dbName,
            location: 'default'
        }).then((db: SQLiteObject) => {
            this.storage = db;
            console.log(' database is created success !');
            // 创建数据库表
            this.createTables().then(() => {
                console.log('Database and table is ready !');
                this.isDbReady.next(true);
            });
        }).catch(e => {
            console.log('error ' + JSON.stringify(e));
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
                // return true;
            });
    }

    /**
     * subscribe database available status
     */
    dbReady$(): Observable<boolean> {
        return this.isDbReady.asObservable();
    }


}
