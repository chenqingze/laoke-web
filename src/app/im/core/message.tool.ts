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
                return GroupMsgRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.MSG_ACK:
                return GroupMsgAckModel.createMessageModel().convertMessageToModel(message);

            case OpCode.INVITATION_REQUEST_ACK:
                return InvitationRequestAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.INVITATION_ACCEPT_ACK:
                return InvitationAcceptAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.INVITATION_DECLINED_ACK:
                return InvitationDeclinedAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.UNKNOWN:
            default:
                throw new Error('opCode is not found.');
        }
    }
}
