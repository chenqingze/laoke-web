import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ChangeMucMuteAck} from '../../core/lib/Group_pb';

export class MucMuteAckMotel extends BaseModel {
    readonly opCode = OpCode.UPDATE_GROUP_MUTE_SETTING_ACK;

    groupId;
    mute;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const changeMucMuteAck = message.getChangeMucMuteAck();
        this.groupId = changeMucMuteAck.getGroupId();
        this.mute = changeMucMuteAck.getMute();
        this.success = changeMucMuteAck.getSuccess();
        this.message = changeMucMuteAck.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const changeMucMuteAck = new ChangeMucMuteAck();

        changeMucMuteAck.setGroupId(this.groupId);
        changeMucMuteAck.setMessage(this.message);
        changeMucMuteAck.setSuccess(this.success);
        changeMucMuteAck.setMute(this.mute);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setChangeMucMuteAck(changeMucMuteAck);
        return message;
    }

}
