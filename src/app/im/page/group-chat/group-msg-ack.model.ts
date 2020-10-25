import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {MsgAck} from '../../core/lib/Msg_pb';

export class GroupMsgAckModel extends BaseModel {
    readonly opCode = OpCode.MSG_ACK;
    msgId;
    seq;
    conversationType;
    convertMessageToModel(message: Message): BaseModel {
        const groupMsgAck = message.getMsgAck();
        this.msgId = groupMsgAck.getMsgId();
        this.seq = groupMsgAck.getSeq();
        this.conversationType = groupMsgAck.getConversationType();
        return this;
    }

    convertToMessage(): Message {
        const groupMsgAck = new MsgAck();
        groupMsgAck.setMsgId(this.msgId);
        groupMsgAck.setSeq(this.seq);
        groupMsgAck.setConversationType(this.conversationType);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setMsgAck(groupMsgAck);
        return message;
    }

}
