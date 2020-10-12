import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ChangeGroupNameAck} from '../../core/lib/Group_pb';

export class ChangeGroupNameAckModel extends BaseModel {
    readonly opCode = OpCode.EDIT_GROUP_NAME_ACK;

    groupId;
    groupName;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const changeGroupNameAck = message.getChangeGroupNameAck();
        this.groupId = changeGroupNameAck.getGroupId();
        this.groupName = changeGroupNameAck.getGroupName();
        this.success = changeGroupNameAck.getSuccess();
        this.message = changeGroupNameAck.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const changeGroupNameAck = new ChangeGroupNameAck();
        changeGroupNameAck.setGroupId(this.groupId);
        changeGroupNameAck.setGroupName(this.groupName);
        changeGroupNameAck.setMessage(this.message);
        changeGroupNameAck.setSuccess(this.success);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setChangeGroupNameAck(changeGroupNameAck);
        return message;
    }

}
