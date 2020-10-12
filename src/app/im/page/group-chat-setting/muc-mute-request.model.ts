import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ChangeMucMuteRequest} from '../../core/lib/Group_pb';

export class MucMuteRequestModel extends BaseModel {
    readonly opCode = OpCode.UPDATE_GROUP_MUTE_SETTING_REQUEST;

    groupId;
    mute;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const changeMucMuteRequest = message.getChangeMucMuteRequest();
        this.groupId = changeMucMuteRequest.getGroupId();
        this.mute = changeMucMuteRequest.getMute();
        this.success = changeMucMuteRequest.getSuccess();
        this.message = changeMucMuteRequest.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const changeMucMuteRequest = new ChangeMucMuteRequest();
        changeMucMuteRequest.setGroupId(this.groupId);
        changeMucMuteRequest.setMessage(this.message);
        changeMucMuteRequest.setSuccess(this.success);
        changeMucMuteRequest.setMute(this.mute);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setChangeMucMuteRequest(changeMucMuteRequest);
        return message;
    }

}
