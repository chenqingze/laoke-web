import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {AccessUserJoinMucAck} from '../../core/lib/Group_pb';

export class AccessUserJoinMucAckModel extends BaseModel {
    readonly opCode = OpCode.ACCESS_USER_JOIN_GROUP_ACK;
    groupId;
    userId;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const accessUserJoinMucAck = message.getAccessUserJoinMucAck();
        this.groupId = accessUserJoinMucAck.getGroupId();
        this.userId = accessUserJoinMucAck.getUserId();
        this.success = accessUserJoinMucAck.getSuccess();
        this.message = accessUserJoinMucAck.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const accessUserJoinMucAck = new AccessUserJoinMucAck();

        accessUserJoinMucAck.setGroupId(this.groupId);
        accessUserJoinMucAck.setUserId(this.userId);
        accessUserJoinMucAck.setSuccess(this.success);
        accessUserJoinMucAck.setMessage(this.message);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setAccessUserJoinMucAck(accessUserJoinMucAck);
        return message;
    }

}
