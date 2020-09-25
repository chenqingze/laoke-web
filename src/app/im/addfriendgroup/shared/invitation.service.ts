import {Injectable} from '@angular/core';
import {WebSocketService, WsStatus} from '../../core/web-socket.service';
import {OpCode} from '../../core/lib/OpCode_pb';
import {FriendInvitationRequestAckModel} from './friend-invitation-request-ack';
import {DbService} from '../../shared/db.service';
import {concatMap, mergeMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InvitationService {

    constructor(
            private wsService: WebSocketService,
            private dbService: DbService
    ) {
        this.subsFriendInvitationRequestAck();
    }

    addInvitation(f:FriendInvitationRequestAckModel):Observable<any>{
        let sql:string = "insert into invitation (id,requesterId,requesterAlias,requesterNickname,addresseeId,addresseeAlias," +
                "addresseeNickname,content,inviteStatus,inviteType,createdAt,updateAt) values(?,?,?,?,?,?,?,?,?,?,?,?)";
        return this.dbService.dbReady$().pipe(mergeMap(isDbReady => {
            if (isDbReady) {
                return this.dbService.storage.executeSql('insert', [f.id,f.requesterId,f.requesterAlias,f.requesterNickname,
                f.addresseeId,f.addresseeAlias,f.addresseeNickname,f.content,f.inviteStatus,f.inviteType,f.createdAt,f.updatedAt]);
            }
            return of(null);
        }));
    }



    //-------------------------------------------------subscribe-----------------------------------------------------------------

    subsFriendInvitationRequestAck() {
        this.wsService.messages$(OpCode.FRIEND_INVITATION_REQUEST_ACK).pipe(
                concatMap((friendInvitationRequestAckModel:FriendInvitationRequestAckModel)=>this.addInvitation(friendInvitationRequestAckModel)))
                .subscribe((sqlResult) => {
                    if(sqlResult != null)console.log("save success: %o",sqlResult)
                    if(sqlResult == null)console.error("save fail")

        });
    }


}
