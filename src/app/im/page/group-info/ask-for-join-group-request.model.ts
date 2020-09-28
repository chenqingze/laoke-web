import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {AskFroJoinGroupRequest} from '../../core/lib/Group_pb';

export class AskForJoinGroupRequestModel extends BaseModel {
    readonly opCode = OpCode.ASK_FOR_JOIN_GROUP_REQUEST;
    groupId;
    userId;
    message;
    success;
    content;

    convertMessageToModel(message: Message): BaseModel {
        const askForJoinGroupRequest = message.getAskForJoinGroupRequest();
        this.groupId = askForJoinGroupRequest.getGroupId();
        this.userId = askForJoinGroupRequest.getUserId();
        this.message = askForJoinGroupRequest.getMessage();
        this.success = askForJoinGroupRequest.getSuccess();
        this.content = askForJoinGroupRequest.getContent();
        return this;
    }

    convertToMessage(): Message {
        const askFroJoinGroupRequest = new AskFroJoinGroupRequest();
        askFroJoinGroupRequest.setGroupId(this.groupId);
        askFroJoinGroupRequest.setMessage(this.message);
        askFroJoinGroupRequest.setSuccess(this.success);
        askFroJoinGroupRequest.setUserId(this.userId);
        askFroJoinGroupRequest.setContent(this.content);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setAskForJoinGroupRequest(askFroJoinGroupRequest);
        return message;
    }


}
