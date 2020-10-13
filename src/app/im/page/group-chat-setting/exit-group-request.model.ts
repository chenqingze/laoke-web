import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ExitGroupRequest} from '../../core/lib/Group_pb';

export class ExitGroupRequestModel extends BaseModel {
    readonly opCode = OpCode.EXIT_GROUP_REQUEST;

    groupId;
    userId;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const msg = message.getExitGroupRequest();
        this.groupId = msg.getGroupId();
        this.userId = msg.getUserId();
        this.success = msg.getSuccess();
        this.message = msg.getMessage();

        return this;
    }

    convertToMessage(): Message {
        const exitGroupRequest = new ExitGroupRequest();

        exitGroupRequest.setGroupId(this.groupId);
        exitGroupRequest.setMessage(this.message);
        exitGroupRequest.setSuccess(this.success);
        exitGroupRequest.setUserId(this.userId);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setExitGroupRequest(exitGroupRequest);
        return message;
    }

}
