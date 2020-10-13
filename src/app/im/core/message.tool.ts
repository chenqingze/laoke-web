import {Message} from './lib/Message_pb';
import * as OpCode_pb from './lib/OpCode_pb';
import {OpCode} from './lib/OpCode_pb';
import {BaseModel} from './base.model';
import {AuthAckModel} from '../auth/auth-ack.model';
import {QueryGroupAckModel} from '../contacts/groups/query-group-ack.model';

import {GroupMsgAckModel} from '../page/group-chat/group-msg-ack.model';
import {GroupMsgRequestModel} from '../page/group-chat/group-msg-request.model';
import {InvitationRequestAckModel} from '../addfriendgroup/shared/friend-invitation-request-ack.model';
import {InvitationAcceptAckModel} from '../addfriendgroup/shared/friend-invitation-accept-ack.model';
import {InvitationDeclinedAckModel} from '../addfriendgroup/shared/friend-invitation-declined-ack.model';
import {AskForJoinGroupRequestModel} from '../page/group-info/ask-for-join-group-request.model';
import {AskForJoinGroupAckModel} from '../page/group-info/ask-for-join-group-ack.model';
import {MsgRequestModel} from '../chat/shared/msg-request.model';
import {MsgAckModel} from '../chat/shared/msg-ack.model';
import {MsgReadNotifyModel} from '../chat/shared/msg-read-notify.model';
import {MsgReadAckModel} from '../chat/shared/msg-read-ack.model';


export class MessageTool {
    /**
     * 转换protobuf协议 Message_pb.Message到 model
     */
    static convertMessageToModel(message: Message): BaseModel {
        const opCode: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap] = message.getOpCode();
        switch (opCode) {
            case OpCode.AUTH_ACK:
                return AuthAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.QUERY_USER_GROUP_ACK:
                return QueryGroupAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.MSG_REQUEST:
                if (message.getMsgRequest().getConversationType() == 0){
                    return MsgRequestModel.createMessageModel().convertMessageToModel(message);
                }
                if (message.getMsgRequest().getConversationType() == 1){
                    return GroupMsgRequestModel.createMessageModel().convertMessageToModel(message);
                }
            case OpCode.MSG_ACK:
                if (message.getMsgAck().getConversationType() == 0){
                    return MsgAckModel.createMessageModel().convertMessageToModel(message);
                }
                if (message.getMsgAck().getConversationType() == 1){
                    return GroupMsgAckModel.createMessageModel().convertMessageToModel(message);
                }
            case OpCode.ASK_FOR_JOIN_GROUP_REQUEST:
                return AskForJoinGroupRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.ASK_FOR_JOIN_GROUP_ACK:
                return AskForJoinGroupAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.INVITATION_REQUEST_ACK:
                return InvitationRequestAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.INVITATION_ACCEPT_ACK:
                return InvitationAcceptAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.INVITATION_DECLINED_ACK:
                return InvitationDeclinedAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.MSG_READ_NOTIFY:
                return MsgReadNotifyModel.createMessageModel().convertMessageToModel(message);
            case OpCode.MSG_READ_ACK:
                return MsgReadAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.UNKNOWN:
            default:
                throw new Error('opCode is not found.');
        }
    }
}
