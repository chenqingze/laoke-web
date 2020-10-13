import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ChangeMucConfirmJoinAck} from '../../core/lib/Group_pb';

export class MucConfirmJoinAckModel extends BaseModel {
    readonly opCode = OpCode.UPDATE_GROUP_CONFIRM_SETTING_ACK;

    groupId;
    confirm;
    message;
    success;

    convertMessageToModel(message: Message): BaseModel {
        const m = message.getChangeMucConfirmJoinAck();
        this.confirm = m.getConfirm();
        this.message = m.getMessage();
        this.success = m.getSuccess();
        this.groupId = m.getGroupId();
        return this;
    }

    convertToMessage(): Message {
        const changeMucConfirmJoinAck = new ChangeMucConfirmJoinAck();

        changeMucConfirmJoinAck.setGroupId(this.groupId);
        changeMucConfirmJoinAck.setMessage(this.message);
        changeMucConfirmJoinAck.setSuccess(this.success);
        changeMucConfirmJoinAck.setConfirm(this.confirm);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setChangeMucConfirmJoinAck(changeMucConfirmJoinAck);
        return message;
    }

}
