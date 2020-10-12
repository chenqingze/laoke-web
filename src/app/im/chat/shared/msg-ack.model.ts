import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {MsgAck} from '../../core/lib/Msg_pb';

export class MsgAckModel extends BaseModel {
    readonly opCode = OpCode.MSG_ACK;
    msgId;
    seq;
    conversationType;
    convertMessageToModel(message: Message): BaseModel {
        const msgAck = message.getMsgAck();
        this.msgId = msgAck.getMsgId();
        this.seq = msgAck.getSeq();
        this.conversationType = msgAck.getConversationType();
        return this;
    }

    convertToMessage(): Message {
        const msgAck = new MsgAck();
        msgAck.setMsgId(this.msgId);
        msgAck.setSeq(this.seq);
        msgAck.setConversationType(this.conversationType);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setMsgAck(msgAck);
        return message;
    }

}
