import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ExitGroupAck} from '../../core/lib/Group_pb';

export class ExitGroupAckModel extends BaseModel {
    readonly opCode = OpCode.EXIT_GROUP_ACK;
    groupId;
    userId;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const msg = message.getExitGroupAck();
        this.groupId = msg.getGroupId();
        this.userId = msg.getUserId();
        this.success = msg.getSuccess();
        this.message = msg.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const msg = new ExitGroupAck();
        this.message = msg.getMessage();
        this.groupId = msg.getGroupId();
        this.userId = msg.getUserId();
        this.success = msg.getUserId();

        const m = this.createMessage();
        m.setOpCode(this.opCode);
        m.setExitGroupAck(msg);

        return m;
    }

}
