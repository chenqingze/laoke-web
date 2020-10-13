import {BaseModel} from '../../../core/base.model';
import {OpCode} from '../../../core/lib/OpCode_pb';
import {Message} from '../../../core/lib/Message_pb';
import {MsgReadNotify} from '../../../core/lib/Msg_pb';


export class MsgReadNotifyModel extends BaseModel {
    msgId: string;
    conversationId: string;
    conversationType: number;
    msgStatus: number;
    msgType: number;
    msgAttachstr: string;
    content: string;
    time: number;
    extendData: string;
    senderId: string;


    readonly opCode = OpCode.MSG_READ_NOTIFY;

    convertMessageToModel(message: Message): BaseModel {
        const msgReadNotify = message.getMsgReadNotify();
        this.msgId = msgReadNotify.getMsgId();
        this.conversationId = msgReadNotify.getConversationId();
        this.conversationType = msgReadNotify.getConversationType();
        this.msgStatus = msgReadNotify.getMsgStatus();
        this.msgType = msgReadNotify.getMsgType();
        this.msgAttachstr = msgReadNotify.getMsgAttachstr();
        this.content = msgReadNotify.getContent();
        this.time = msgReadNotify.getTime();
        this.extendData = msgReadNotify.getExtendData();
        this.senderId = msgReadNotify.getSenderId();
        return this;
    }

    convertToMessage(): Message {
        const msgReadNotify = new MsgReadNotify();
        msgReadNotify.setMsgId('123');
        msgReadNotify.setConversationId(this.conversationId);
        msgReadNotify.setConversationType(1);
        msgReadNotify.setMsgStatus(0);
        msgReadNotify.setMsgType(this.msgType);
        msgReadNotify.setMsgAttachstr(this.msgAttachstr);
        msgReadNotify.setContent(this.content);
        msgReadNotify.setTime(this.time);
        msgReadNotify.setSenderId(this.senderId);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setMsgRequest(msgReadNotify);
        return message;
    }

}
