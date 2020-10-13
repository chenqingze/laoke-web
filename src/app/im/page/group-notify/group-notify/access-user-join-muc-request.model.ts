import {BaseModel} from '../../../core/base.model';
import {OpCode} from '../../../core/lib/OpCode_pb';
import {Message} from '../../../core/lib/Message_pb';
import {AccessUserJoinMucRequest} from '../../../core/lib/Group_pb';

export class AccessUserJoinMucRequestModel extends BaseModel {
    readonly opCode = OpCode.ACCESS_USER_JOIN_GROUP_REQUEST;

    groupId;
    userId;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const accessUserJoinMucRequest = message.getAccessUserJoinMucRequest();
        this.groupId = accessUserJoinMucRequest.getGroupId();
        this.userId = accessUserJoinMucRequest.getUserId();
        this.success = accessUserJoinMucRequest.getSuccess();
        this.message = accessUserJoinMucRequest.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const accessUserJoinMucRequest = new AccessUserJoinMucRequest();
        accessUserJoinMucRequest.setGroupId(this.groupId);
        accessUserJoinMucRequest.setUserId(this.userId);
        accessUserJoinMucRequest.setSuccess(this.success);
        accessUserJoinMucRequest.setMessage(this.message);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setAccessUserJoinMucRequest(accessUserJoinMucRequest);
        return message;
    }
}
