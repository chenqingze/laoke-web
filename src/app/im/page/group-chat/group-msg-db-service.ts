import {DbService} from '../../shared/db.service';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GroupMsgDbService {
    constructor(private dbService: DbService) {

    }


    saveMucHist(seq, conversationType, conversationId, msgDirection, msgType, msgStatus, content) {
        this.dbService.storage.executeSql('INSERT OR REPLACE INTO "msg_hist" (seq,conversationType,conversationId,msgDirection,msgType,msgStatus,content,createdAt) VALUES (?,?, ?,?,?,?,?,?)',
            [seq, conversationType, conversationId, msgDirection, msgType, msgStatus, content, new Date().getTime()]);
        console.log('yes！');
    }

    updateMucHistStatus(seq, id, status) {
        this.dbService.storage.executeSql('update msg_hist set id=? and status=? where seq=?', [id, status, seq]);
        console.log('yes!');
    }


}
