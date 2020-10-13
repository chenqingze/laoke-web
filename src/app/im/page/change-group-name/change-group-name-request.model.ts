import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ChangeGroupNameRequest} from '../../core/lib/Group_pb';

export class ChangeGroupNameRequestModel extends BaseModel {
    readonly opCode = OpCode.EDIT_GROUP_NAME_REQUEST;
    groupId;
    groupName;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const changeGroupNameRequest = message.getChangeGroupNameRequest();
        this.groupId = changeGroupNameRequest.getGroupId();
        this.groupName = changeGroupNameRequest.getGroupName();
        this.success = changeGroupNameRequest.getSuccess();
        this.message = changeGroupNameRequest.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const changeGroupNameRequest = new ChangeGroupNameRequest();
        changeGroupNameRequest.setGroupId(this.groupId);
        changeGroupNameRequest.setGroupName(this.groupName);
        changeGroupNameRequest.setMessage(this.message);
        changeGroupNameRequest.setSuccess(this.success);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setChangeGroupNameRequest(changeGroupNameRequest);
        return message;
    }

}
