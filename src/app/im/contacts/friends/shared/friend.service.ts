import {Injectable} from '@angular/core';
import {SQLiteObject} from '@ionic-native/sqlite/ngx';
import {EMPTY, empty, from, Observable, of, Subscription} from 'rxjs';
import {concatMap, mergeMap} from 'rxjs/operators';
import {DbService} from 'src/app/im/shared/db.service';
import {Friend} from './friend.model';
import {ApiService} from '../../../shared/api/api.service';
import {fromPromise} from 'rxjs/internal-compatibility';
import {OpCode} from '../../../core/lib/OpCode_pb';
import {InvitationAcceptAckModel} from '../../../addfriendgroup/shared/friend-invitation-accept-ack.model';
import {InviteStatus} from '../../../addfriendgroup/shared/Invitation.model';
import {WebSocketService} from '../../../core/web-socket.service';
import {API_URL} from '../../../shared/api/api.url';

@Injectable({
    providedIn: 'root'
})
export class FriendService {


    constructor(
            private dbService: DbService,
            private wsService: WebSocketService,
            private apiService: ApiService
    ) {
        console.log('FriendService Constructor ...');

        this.listenFriend();
    }

    listenFriend(){
        this.wsService.messages$(OpCode.INVITATION_ACCEPT_ACK).pipe(concatMap(
            (friendInvitationAcceptAckModel: InvitationAcceptAckModel) => {
                return this.addFriend(friendInvitationAcceptAckModel.friend);
            })).subscribe(
            (sqlResult) => {
                if (sqlResult != null) {
                    console.log('add user success: %o', sqlResult);
                }
                if (sqlResult == null) {
                    console.error('add user fail');
                }
            },
            err => {
                console.error('err', err);
            });
    }

    // -----------------------------------------------------------sql----------------------------------------------------------

    addFriend(f: Friend){
        const sql: string = 'insert into friend (id,userId,friendId,friendName,friendProfile,alias,isBlocked,isMute,' +
            'isStickOnTop,status,createdAt,updatedAt) values(?,?,?,?,?,?,?,?,?,?,?,?)';
        return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
            if (isDbReady) {
                return this.dbService.storage.executeSql(sql, [f.id, f.userId, f.friendId, f.friendName, f.friendProfile, f.alias,
                    f.isBlocked, f.isMute, f.isStickOnTop, f.status, f.createdAt, f.updatedAt]);
            }
            return of(null);
        }));
    }

    getFriend(): Observable<any> {
        return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
            if (isDbReady) {
                const friendPromise = this.dbService.storage.executeSql('select * from friend', []);
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

    updateFriend(f: Friend): Observable<any>{
        const sql: string = 'update friend set friendName = ?, friendProfile = ?, alias = ?, isBlocked = ?, isMute = ?, ' +
            'isStickOnTop = ?, status = ?, updatedAt = ? where id = ?';
        return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
            if (isDbReady) {
                return this.dbService.storage.executeSql(sql, [f.friendName, f.friendProfile, f.alias, f.isBlocked, f.isMute,
                    f.isStickOnTop, f.status, f.updatedAt, f.id]);
            }
            return of(null);
        }));
    }

    // -----------------------------------------------------------http---------------------------------------------------------

    // 查询好友  精准查询
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

    updateAlias(id: string, alias: string): Observable<any>{
        const updateFriendAlias = API_URL.FRIEND.updateFriendAlias;
        return this.apiService.putByAuth(updateFriendAlias, JSON.stringify({id, alias}))
            .pipe(concatMap((res => this.updateFriend(res.friend))));
    }

    updFriendMute(id: string, mute: number): Observable<any>{
        const updateFriendMute = API_URL.FRIEND.updateFriendMute;
        return this.apiService.putByAuth(updateFriendMute, JSON.stringify({id, isMute: mute}))
            .pipe(concatMap((res => this.updateFriend(res.friend))));
    }

    updFriendStickOnTop(id: string, isStickOnTop: number): Observable<any>{
        const updFriendStickOnTop = API_URL.FRIEND.updFriendStickOnTop;
        return this.apiService.putByAuth(updFriendStickOnTop, JSON.stringify({id, isStickOnTop}))
            .pipe(concatMap((res => this.updateFriend(res.friend))));
    }

    updFriendBlocked(id: string, isBlocked: number): Observable<any>{
        const updFriendBlocked = API_URL.FRIEND.updFriendBlocked;
        return this.apiService.putByAuth(updFriendBlocked, JSON.stringify({id, isBlocked}))
            .pipe(concatMap((res => this.updateFriend(res.friend))));
    }
}
