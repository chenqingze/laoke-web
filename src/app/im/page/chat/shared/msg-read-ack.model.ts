import {BaseModel} from '../../../core/base.model';
import {OpCode} from '../../../core/lib/OpCode_pb';
import {Message} from '../../../core/lib/Message_pb';
import {MsgReadAck} from '../../../core/lib/Msg_pb';


export class MsgReadAckModel extends BaseModel {
    readonly opCode = OpCode.MSG_READ_ACK;
    msgId;

    convertMessageToModel(message: Message): BaseModel {
        const msgReadAck = message.getMsgReadAck();
        this.msgId = msgReadAck.getMsgId();
        return this;
    }

    convertToMessage(): Message {
        const msgReadAck = new MsgReadAck();
        msgReadAck.setMsgId(this.msgId);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setMsgReadAck(msgReadAck);
        return message;
    }

}
