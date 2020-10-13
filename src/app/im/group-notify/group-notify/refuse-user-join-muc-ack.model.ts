import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {RefuseUserJoinMucAck} from '../../core/lib/Group_pb';

export class RefuseUserJoinMucAckModel extends BaseModel {
    readonly opCode = OpCode.REFUSE_USER_JOIN_MUC_ACK;
    groupId;
    userId;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const refuseUserJoinMucAck = message.getRefuseUserJoinMucAck();
        this.groupId = refuseUserJoinMucAck.getGroupId();
        this.success = refuseUserJoinMucAck.getSuccess();
        this.userId = refuseUserJoinMucAck.getUserId();
        this.message = refuseUserJoinMucAck.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const refuseUserJoinMucAck = new RefuseUserJoinMucAck();
        refuseUserJoinMucAck.setGroupId(this.groupId);
        refuseUserJoinMucAck.setUserId(this.userId);
        refuseUserJoinMucAck.setMessage(this.message);
        refuseUserJoinMucAck.setSuccess(this.success);
        const msg = this.createMessage();
        msg.setOpCode(this.opCode);
        msg.setRefuseUserJoinMucAck(refuseUserJoinMucAck);

        return msg;
    }

}
