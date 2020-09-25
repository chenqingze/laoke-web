import {Injectable} from '@angular/core';
import {SQLiteObject} from '@ionic-native/sqlite/ngx';
import {EMPTY, empty, from, Observable, of, Subscription} from 'rxjs';
import {concatMap, mergeMap} from 'rxjs/operators';
import {DbService} from 'src/app/im/shared/db.service';
import {Friend} from '../friend.model';
import {ApiService} from '../../../shared/api/api.service';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({
    providedIn: 'root'
})
export class FriendService {


    constructor(
            private dbService: DbService,
            private apiService: ApiService
    ) {
        console.log('FriendService Constructor ...');
    }

    //-----------------------------------------------------------sql----------------------------------------------------------

    getFriend(): Observable<any> {
        return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
            if (isDbReady) {
                let friendPromise = this.dbService.storage.executeSql('select * from friend', []);
                return fromPromise(friendPromise);
            }
            return EMPTY;
        }));
    }

    getFriendById(friendId: string): Observable<any> {
        return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
            if (isDbReady) {
                return fromPromise(this.dbService.storage.executeSql('select * from friend where friendId = ?', [friendId])) ;
            }
            return EMPTY;
        }));
    }

    //-----------------------------------------------------------http---------------------------------------------------------

    //查询好友  精准查询
    searchFriend(searchCon: string) {
        // const url = API_URL.FRIEND.searchFriend + '?name=' + searchCon;
        /*return this.apiService.getByAuth(url).toPromise().then(data => {
            return data;
        });*/
        return Promise.resolve({
            data: {
                id: searchCon,
                nickname: '希克斯',
                headImgPath: 'https://picb.zhimg.com/v2-091d323c1aa6ae92f91f67e1c8bf391f_l.jpg',
            }
        });
    }
}
