import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {Group} from '../../core/lib/Group_pb';

export class QueryGroupAckModel extends BaseModel {
    readonly opCode = OpCode.QUERY_USER_GROUP_ACK;
    groups: Array<Group>;
    userId;

    convertMessageToModel(message: Message): BaseModel {

        const queryUserGroupAck = message.getQueryUserGroupAck();
        this.groups = queryUserGroupAck.getGroupsList();
        this.userId = queryUserGroupAck.getUserId();
        return this;
    }

    convertToMessage(): Message {

        return undefined;
    }

}
