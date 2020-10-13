import {DbService} from '../../core/db.service';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GroupMsgDbService {
    currentUser;

    constructor(private dbService: DbService) {
        this.currentUser = '123';
    }

    // 保存聊天记录
    saveMucHist(seq, conversationType, conversationId, msgDirection, msgType, msgStatus, content) {
        this.dbService.storage.executeSql('INSERT OR REPLACE INTO "msg_hist" (seq,conversationType,conversationId,senderId,msgDirection,msgType,msgStatus,content,createdAt) VALUES (?,?,?, ?,?,?,?,?,?)',
            [seq, conversationType, conversationId, this.currentUser, msgDirection, msgType, msgStatus, content, new Date().getTime()]);
        console.log('yes！');
    }

    // 更新聊天记录状态
    updateMucHistStatus(seq, id, status) {
        this.dbService.storage.executeSql('update msg_hist set id=? and status=? where seq=?', [id, status, seq]);
        console.log('yes!');
    }

    // 保存至最近联系人
    saveRecentContact(conversationId, alias, conversationType,
                      lastAckMsgId, lastAckMsgTime, msgDirection, msgType, msgStatus, content, unreadCount) {
        this.dbService.storage.executeSql('INSERT OR REPLACE INFO "recent_contact"(conversationId,alias,conversationType,' +
            'lastAckMsgId,lastAckMsgTime,msgDirection,msgType,msgStatus,content,unreadCount,createdAt,updatedAt)VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',
            [conversationId, alias, conversationType,
                lastAckMsgId, lastAckMsgTime, msgDirection, msgType, msgStatus, content, unreadCount]);

    }

    // 查询历史记录
    queryMucHist(groupId) {
        return this.dbService.storage.executeSql('SELECT * FROM "msg_hist" where conversationId=? order by createdAt', [groupId]).then((data) => {
            return data;
        });
    }


}
