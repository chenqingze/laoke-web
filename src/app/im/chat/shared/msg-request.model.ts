import {BaseModel} from '../../core/base.model';
import {Message} from '../../core/lib/Message_pb';
import {OpCode} from '../../core/lib/OpCode_pb';
import {MsgRequest} from '../../core/lib/Msg_pb';

export class MsgRequestModel extends BaseModel {
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


    readonly opCode = OpCode.MSG_REQUEST;

    convertMessageToModel(message: Message): BaseModel {
        const msgRequest = message.getMsgRequest();
        this.msgId = msgRequest.getMsgId();
        this.conversationId = msgRequest.getConversationId();
        this.conversationType = msgRequest.getConversationType();
        this.msgStatus = msgRequest.getMsgStatus();
        this.msgType = msgRequest.getMsgType();
        this.msgAttachstr = msgRequest.getMsgAttachstr();
        this.content = msgRequest.getContent();
        this.time = msgRequest.getTime();
        this.extendData = msgRequest.getExtendData();
        this.senderId = msgRequest.getSenderId();
        return this;
    }

    convertToMessage(): Message {
        const msgRequest = new MsgRequest();
        msgRequest.setMsgId('123');
        msgRequest.setConversationId(this.conversationId);
        msgRequest.setConversationType(1);
        msgRequest.setMsgStatus(0);
        msgRequest.setMsgType(this.msgType);
        msgRequest.setMsgAttachstr(this.msgAttachstr);
        msgRequest.setContent(this.content);
        msgRequest.setTime(this.time);
        msgRequest.setSenderId(this.senderId);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setMsgRequest(msgRequest);
        return message;
    }

}
