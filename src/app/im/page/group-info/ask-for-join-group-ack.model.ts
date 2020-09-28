import {BaseModel} from '../../core/base.model';
import {Message} from '../../core/lib/Message_pb';
import {OpCode} from '../../core/lib/OpCode_pb';
import {AskForJoinGroupAck} from '../../core/lib/Group_pb';

export class AskForJoinGroupAckModel extends BaseModel {
    readonly opCode = OpCode.ASK_FOR_JOIN_GROUP_ACK;

    groupId;
    userId;
    message;
    success;

    convertMessageToModel(message: Message): BaseModel {
        const askForJoinGroupAck = message.getAskForJoinGroupAck();
        this.groupId = askForJoinGroupAck.getGroupId();
        this.userId = askForJoinGroupAck.getUserId();
        this.message = askForJoinGroupAck.getMessage();
        this.success = askForJoinGroupAck.getSuccess();
        return this;
    }

    convertToMessage(): Message {
        const askForJoinGroupAck = new AskForJoinGroupAck();
        askForJoinGroupAck.setGroupId(this.groupId);
        askForJoinGroupAck.setMessage(this.message);
        askForJoinGroupAck.setSuccess(this.success);
        askForJoinGroupAck.setUserId(this.userId);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setAskForJoinGroupAck(askForJoinGroupAck);
        return message;

    }
}
