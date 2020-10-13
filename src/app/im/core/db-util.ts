import {BaseModel} from '../core/base.model';
import {OpCode} from '../core/lib/OpCode_pb';
import {Injectable} from '@angular/core';
import {MsgService} from '../chat/shared/msg.service';

@Injectable({providedIn: 'root'})
export class DbUtil {
    static instance;

    constructor(private msgService: MsgService) {
        DbUtil.instance = this;
    }

    storageMessageModel(model: BaseModel) {
        switch (model.opCode) {
            case OpCode.AUTH_ACK:
                // this.msgService.addMsg();
                // todo :存数据库；
                break;
            case OpCode.QUERY_USER_GROUP_ACK:
                // todo :存数据库；
                break;
        }
    }
}
