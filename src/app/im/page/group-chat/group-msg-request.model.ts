import {BaseModel} from '../../core/base.model';
import {Message} from '../../core/lib/Message_pb';
import {OpCode} from '../../core/lib/OpCode_pb';
import {MsgRequest} from '../../core/lib/Msg_pb';

export class GroupMsgRequestModel extends BaseModel {
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
        const groupMsgRequest = message.getMsgRequest();
        this.msgId = groupMsgRequest.getMsgId();
        this.conversationId = groupMsgRequest.getConversationId();
        this.conversationType = groupMsgRequest.getConversationType();
        this.msgStatus = groupMsgRequest.getMsgStatus();
        this.msgType = groupMsgRequest.getMsgType();
        this.msgAttachstr = groupMsgRequest.getMsgAttachstr();
        this.content = groupMsgRequest.getContent();
        this.time = groupMsgRequest.getTime();
        this.extendData = groupMsgRequest.getExtendData();
        this.senderId = groupMsgRequest.getSenderId();
        return this;
    }

    convertToMessage(): Message {
        const groupMsgRequest = new MsgRequest();
        groupMsgRequest.setMsgId('123');
        groupMsgRequest.setConversationId(this.conversationId);
        groupMsgRequest.setConversationType(1);
        groupMsgRequest.setMsgStatus(0);
        groupMsgRequest.setMsgType(this.msgType);
        groupMsgRequest.setMsgAttachstr(this.msgAttachstr);
        groupMsgRequest.setContent(this.content);
        groupMsgRequest.setTime(this.time);
        groupMsgRequest.setSenderId(this.senderId);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setMsgRequest(groupMsgRequest);
        return message;
    }

}
