import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {RemoveGroupMemberAck} from '../../core/lib/Group_pb';

export class RemoveGroupMemberAckModel extends BaseModel {
    readonly opCode = OpCode.DETACH_USER_FROM_GROUP_ACK;
    groupId;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const removeGroupMemberAck = message.getRemoveGroupMemberAck();
        this.groupId = removeGroupMemberAck.getGroupId();
        this.success = removeGroupMemberAck.getSuccess();
        this.message = removeGroupMemberAck.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const removeGroupMemberAck = new RemoveGroupMemberAck();
        removeGroupMemberAck.setGroupId(this.groupId);
        removeGroupMemberAck.setMessage(this.message);
        removeGroupMemberAck.setSuccess(this.success);

        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setRemoveGroupMemberAck(removeGroupMemberAck);
        return message;
    }

}
