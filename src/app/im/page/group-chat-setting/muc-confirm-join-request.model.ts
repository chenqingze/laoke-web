import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ChangeMucConfirmJoinRequest} from '../../core/lib/Group_pb';

export class MucConfirmJoinRequestModel extends BaseModel {
    readonly opCode = OpCode.UPDATE_GROUP_CONFIRM_SETTING_REQUEST;

    groupId;
    message;
    success;
    confirm;

    convertMessageToModel(message: Message): BaseModel {
        const msg = message.getChangeMucConfirmJoinRequest();
        this.groupId = msg.getGroupId();
        this.message = msg.getMessage();
        this.success = msg.getSuccess();
        this.confirm = msg.getConfirm();
        return this;
    }

    convertToMessage(): Message {
        const msg = new ChangeMucConfirmJoinRequest();
        msg.setConfirm(this.confirm);
        msg.setGroupId(this.groupId);
        msg.setMessage(this.message);
        msg.setSuccess(this.success);

        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setChangeMucConfirmJoinRequest(msg);

        return message;
    }

}
