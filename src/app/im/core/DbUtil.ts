import {BaseModel} from '../core/base.model';
import {OpCode} from '../core/lib/OpCode_pb';

export class DbUtil {
    static storageMessageModel(model: BaseModel) {
        switch (model.opCode) {
            case OpCode.AUTH_ACK:
                // todo :存数据库；
                break;
            case OpCode.QUERY_USER_GROUP_ACK:
                // todo :存数据库；
                break;
        }
    }
}
