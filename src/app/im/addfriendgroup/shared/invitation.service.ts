import {Injectable} from '@angular/core';
import {WebSocketService, WsStatus} from '../../core/web-socket.service';
import {OpCode} from '../../core/lib/OpCode_pb';
import {DbService} from '../../shared/db.service';
import {concatMap, mergeMap} from 'rxjs/operators';
import {Observable, of, Subject} from 'rxjs';
import {InvitationRequestAckModel} from './friend-invitation-request-ack.model';
import {Invitation, InviteStatus} from './Invitation.model';
import {fromPromise} from 'rxjs/internal-compatibility';
import {BaseModel} from '../../core/base.model';
import {InvitationAcceptAckModel} from './friend-invitation-accept-ack.model';
import {InvitationDeclinedAckModel} from './friend-invitation-declined-ack.model';

@Injectable({
    providedIn: 'root'
})
export class InvitationService {

    constructor(
        private wsService: WebSocketService,
        private dbService: DbService
    ) {
        console.log('InvitationService constructor ...');
        this.listenInvitation();
    }

    //监听好友申请请求

    addInvitation(friendInvitationRequestAckModel: InvitationRequestAckModel): Observable<any> {
        let sql: string = 'insert into invitation (id,requesterId,requesterAlias,requesterNickname,requesterProfile,addresseeId,addresseeAlias,' +
            'addresseeNickname,addresseeProfile,content,inviteStatus,inviteType,readStatus,createdAt,updatedAt) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        let f = friendInvitationRequestAckModel.invitation;
        f.readStatus = 0;
        return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
            if (isDbReady) {
                return this.dbService.storage.executeSql(sql, [f.id, f.requesterId, f.requesterAlias, f.requesterNickname, f.requesterProfile,
                    f.addresseeId, f.addresseeAlias, f.addresseeNickname, f.addresseeProfile, f.content, f.inviteStatus, f.inviteType, f.readStatus,
                    f.createdAt, f.updatedAt]);
            }
            return of(null);
        }));
    }

    updateInviteStatus(id:string,status:string): Observable<any>{
        let sql: string = 'update invitation set inviteStatus = ? where id = ?';
        return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
            if (isDbReady) {
                return this.dbService.storage.executeSql(sql, [status,id]);
            }
            return of(null);
        }))
    }

    listenInvitation() {
        this.wsService.messages$(OpCode.FRIEND_INVITATION_REQUEST_ACK).pipe(concatMap(
            (friendInvitationRequestAckModel: InvitationRequestAckModel) =>
                this.addInvitation(friendInvitationRequestAckModel))).subscribe(
                    (sqlResult) => {
                        if (sqlResult != null) {
                            console.log('save success: %o', sqlResult);
                        }
                        if (sqlResult == null) {
                            console.error('save fail');
                        }
                    },
                    err => {
                        console.error('err', err);
                    });

        this.wsService.messages$(OpCode.FRIEND_INVITATION_ACCEPT_ACK).pipe(concatMap(
            (friendInvitationAcceptAckModel: InvitationAcceptAckModel) => {
                return this.updateInviteStatus(friendInvitationAcceptAckModel.id,InviteStatus.ACCEPTED);
            })).subscribe(
                (sqlResult) => {
                if (sqlResult != null) {
                    console.log('update accept success: %o', sqlResult);
                }
                if (sqlResult == null) {
                    console.error('update accept fail');
                }
            },
                err => {
                console.error('err', err);
            });

        this.wsService.messages$(OpCode.FRIEND_INVITATION_DECLINED_ACK).pipe(concatMap(
            (friendInvitationDeclinedAckModel: InvitationDeclinedAckModel) => {
                return this.updateInviteStatus(friendInvitationDeclinedAckModel.id,InviteStatus.DECLINED);
            })).subscribe(
            (sqlResult) => {
                if (sqlResult != null) {
                    console.log('update declined success: %o', sqlResult);
                }
                if (sqlResult == null) {
                    console.error('update declined fail');
                }
            },
            err => {
                console.error('err', err);
            });
    }

    getInvitation(): Observable<any> {
        let sql: string = 'select * from invitation where inviteType = ?';
        return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
            if (isDbReady) {
                return this.dbService.storage.executeSql(sql, ['INVITE_FRIEND']);
            }
            return of(null);
        }));
    }

}
