import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {InvitationJoinGroupAck} from '../../core/lib/Group_pb';

export class InvitationUserJoinGroupAckModel extends BaseModel {
    readonly opCode = OpCode.INVITATION_USER_JOIN_GROUP_ACK;
    groupId;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const invitationJoinGroupAck = message.getInvitationJoinGroupAck();
        this.groupId = invitationJoinGroupAck.getGroupId();
        this.success = invitationJoinGroupAck.getSuccess();
        this.message = invitationJoinGroupAck.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const invitationJoinGroupAck = new InvitationJoinGroupAck();
        invitationJoinGroupAck.setGroupId(this.groupId);
        invitationJoinGroupAck.setMessage(this.message);
        invitationJoinGroupAck.setSuccess(this.success);

        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setInvitationJoinGroupAck(invitationJoinGroupAck);
        return message;

    }

}
