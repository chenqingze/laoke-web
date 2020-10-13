import { Injectable } from '@angular/core';
import {OpCode} from '../../core/lib/OpCode_pb';
import {concatMap} from 'rxjs/operators';
import {InvitationRequestAckModel} from '../../addfriendgroup/shared/friend-invitation-request-ack.model';
import {WebSocketService} from '../../core/web-socket.service';
import {MsgAckModel} from './msg-ack.model';
import {Observable, of} from 'rxjs';
import {DbService} from '../../shared/db.service';
import {MsgReadNotifyModel} from './msg-read-notify.model';
import {MsgModel} from './msg.model';
import {MsgRequestModel} from './msg-request.model';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(
      private wsService: WebSocketService,
      private dbService: DbService,
  ) {
    console.log('MsgService constructor ...');

    this.listenMsgAck();
    this.listenMsgReadNotify();
  }

  private listenMsgAck() {
    this.wsService.messages$(OpCode.MSG_ACK).pipe(concatMap(
        (msgAckModel: MsgAckModel) =>
            this.updMsg(msgAckModel))).subscribe(
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
  }

  private listenMsgReadNotify() {
    this.wsService.messages$(OpCode.MSG_READ_NOTIFY).pipe(concatMap(
        (msgReadNotifyModel: MsgReadNotifyModel) =>
            this.addMsg(msgReadNotifyModel))).subscribe(
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
  }

  private updMsg(msgAckModel: MsgAckModel) {
      const sql = 'update msg_hist set id = ?, msgStatus = 1 where seq = ?';
      return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
          if (isDbReady) {
              return this.dbService.storage.executeSql(sql, [msgAckModel.msgId, msgAckModel.seq]);
          }
          return of(null);
      }));
  }

    addMsg(msgReadNotifyModel: MsgReadNotifyModel) {
      const m = msgReadNotifyModel;
      const sql = 'insert or replace into msg_hist (seq, id, conversationType, conversationId, senderId, msgDirection, msgType, msgStatus, ' +
          'content, createdAt, updatedAt, revokeAt)values (?,?,?,?,?,?,?,?,?,?,?,?);';
      return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
          if (isDbReady) {
              return this.dbService.storage.executeSql(sql, [m.seq, m.msgId, m.conversationType, m.conversationId, m.senderId, 'ccc',
              m.msgType, m.msgStatus, m.content, m.time, m.time, m.time]);
          }
          return of(null);
      }));
  }

    getMsg(friendId: string): Observable<any>{
      const sql = 'select * from msg_hist where receiverId = ?';
      return this.dbService.dbReady$().pipe(concatMap(isDbReady => {
          if (isDbReady) {
              return this.dbService.storage.executeSql(sql, [friendId]);
          }
          return of(null);
      }));
    }

    // ----------------------------------------------------------------------------------------------------------------------------

    addMsgRequestModel(msgRequestModel: MsgRequestModel){
      const m: MsgRequestModel = msgRequestModel;
      const sql = 'insert or replace into msg_hist(msgId,senderId,receiverId,conversationType,msgType,msgStatus,content) '
          + 'values(?,?,?,?,?,?,?);';
      return this.dbService.storage.executeSql(sql, m.msgId, m.senderId, m.receiverId, m.conversationType, m.msgType,
          m.msgStatus, m.content);
    }
}
