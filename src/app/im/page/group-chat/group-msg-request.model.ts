import {BaseModel} from '../../core/base.model';
import {Message} from '../../core/lib/Message_pb';
import {OpCode, OpCodeMap} from '../../core/lib/OpCode_pb';
import {QueryUserGroupsRequest} from '../../core/lib/Group_pb';
import {MsgRequest} from '../../core/lib/Msg_pb';

export class GroupMsgRequestModel extends BaseModel{
    msgId; // 消息id、可由发送方生成,用户消息去重,这里由MsgAck 返回给客户端，且返回时携带相同seq
    conversationId;
    conversationType;
    msgStatus;
    msgType;
    msgAttachStr;
    content;
    time;
    extendData;
    senderId;


    readonly opCode = OpCode.MSG_REQUEST;

    convertMessageToModel(message: Message): BaseModel {
        const groupMsgRequest = message.getMsgRequest();
        this.msgId = groupMsgRequest.getMsgId();
        this.conversationId = groupMsgRequest.getConversationId();
        this.conversationType = groupMsgRequest.getConversationType();
        this.msgStatus = groupMsgRequest.getMsgStatus();
        this.msgType = groupMsgRequest.getMsgType();
        this.msgAttachStr = groupMsgRequest.getMsgAttachstr();
        this.content = groupMsgRequest.getContent();
        this.time = groupMsgRequest.getTime();
        this.extendData = groupMsgRequest.getExtendData();
        this.senderId = groupMsgRequest.getSenderId();
        return this;
    }

    convertToMessage(): Message {
        const groupMsgRequest = new MsgRequest();
        groupMsgRequest.setMsgId('');
        groupMsgRequest.setConversationId(this.conversationId);
        groupMsgRequest.setConversationType(this.conversationType);
        groupMsgRequest.setMsgStatus(this.msgStatus);
        groupMsgRequest.setMsgType(this.msgType);
        groupMsgRequest.setMsgAttachstr(this.msgAttachStr);
        groupMsgRequest.setContent(this.content);
        groupMsgRequest.setTime(new Date().getTime());
        groupMsgRequest.setSenderId(this.senderId);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setMsgRequest(groupMsgRequest);
        return message;
    }

}
