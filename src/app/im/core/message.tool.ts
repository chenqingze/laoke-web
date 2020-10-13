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
import {CreateGroupAckModel} from '../page/set-group-name/create-group-ack.model';
import {CreateGroupRequestModel} from '../page/set-group-name/create-group-request.model';
import {InvitationUserJoinGroupRequestModel} from '../page/invite-group-member/invitation-user-join-group-request.model';
import {InvitationUserJoinGroupAckModel} from '../page/invite-group-member/invitation-user-join-group-ack.model';
import {RemoveGroupMemberRequestModel} from '../page/remove-group-member/remove-group-member-request.model';
import {RemoveGroupMemberAckModel} from '../page/remove-group-member/remove-group-member-ack.model';
import {ChangeGroupNameRequestModel} from '../page/change-group-name/change-group-name-request.model';
import {ChangeGroupNameAckModel} from '../page/change-group-name/change-group-name-ack.model';
import {EditGroupNoticeRequestModel} from '../page/edit-group-notice/edit-group-notice-request.model';
import {EditGroupNoticeAckModel} from '../page/edit-group-notice/edit-group-notice-ack.model';
import {MucMuteRequestModel} from '../page/group-chat-setting/muc-mute-request.model';
import {MucMuteAckMotel} from '../page/group-chat-setting/muc-mute-ack.motel';
import {MucConfirmJoinRequestModel} from '../page/group-chat-setting/muc-confirm-join-request.model';
import {MucConfirmJoinAckModel} from '../page/group-chat-setting/muc-confirm-join-ack.model';
import {ExitGroupAckModel} from '../page/group-chat-setting/exit-group-ack.model';
import {AccessUserJoinMucRequestModel} from '../group-notify/group-notify/access-user-join-muc-request.model';
import {AccessUserJoinMucAckModel} from '../group-notify/group-notify/access-user-join-muc-ack.model';
import {ExitGroupRequestModel} from '../page/group-chat-setting/exit-group-request.model';
import {RefuseUserJoinMucRequestModel} from '../group-notify/group-notify/refuse-user-join-muc-request.model';
import {RefuseUserJoinMucAckModel} from '../group-notify/group-notify/refuse-user-join-muc-ack.model';


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
                if (message.getMsgRequest().getConversationType()){
                    return MsgRequestModel.createMessageModel().convertMessageToModel(message);
                }
                if (message.getMsgRequest().getConversationType() === 1){
                    return GroupMsgRequestModel.createMessageModel().convertMessageToModel(message);
                }
            case OpCode.MSG_ACK:
                if (ConversationType.P2P === message.getMsgAck().getConversationType()){
                    return MsgAckModel.createMessageModel().convertMessageToModel(message);
                }
                if (ConversationType.MUC === message.getMsgAck().getConversationType()){
                    return GroupMsgAckModel.createMessageModel().convertMessageToModel(message);
                }
            case OpCode.CREATE_GROUP_ACK:
                return CreateGroupAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.CREATE_GROUP_REQUEST:
                return CreateGroupRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.INVITATION_USER_JOIN_GROUP_REQUEST:
                return InvitationUserJoinGroupRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.INVITATION_USER_JOIN_GROUP_ACK:
                return InvitationUserJoinGroupAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.DETACH_USER_FROM_GROUP_REQUEST:
                return RemoveGroupMemberRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.DETACH_USER_FROM_GROUP_ACK:
                return RemoveGroupMemberAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.EDIT_GROUP_NAME_REQUEST:
                return ChangeGroupNameRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.EDIT_GROUP_NAME_ACK:
                return ChangeGroupNameAckModel.createMessageModel().convertMessageToModel(message);

            case OpCode.EDIT_GROUP_NOTICE_REQUEST:
                return EditGroupNoticeRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.EDIT_GROUP_NOTICE_ACK:
                return EditGroupNoticeAckModel.createMessageModel().convertMessageToModel(message);

            case OpCode.UPDATE_GROUP_MUTE_SETTING_REQUEST:
                return MucMuteRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.UPDATE_GROUP_MUTE_SETTING_ACK:
                return MucMuteAckMotel.createMessageModel().convertMessageToModel(message);

            case OpCode.UPDATE_GROUP_CONFIRM_SETTING_REQUEST:
                return MucConfirmJoinRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.UPDATE_GROUP_CONFIRM_SETTING_ACK:
                return MucConfirmJoinAckModel.createMessageModel().convertMessageToModel(message);

            case OpCode.EXIT_GROUP_ACK:
                return ExitGroupAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.EXIT_GROUP_REQUEST:
                return ExitGroupRequestModel.createMessageModel().convertMessageToModel(message);

            case OpCode.ACCESS_USER_JOIN_GROUP_REQUEST:
                return AccessUserJoinMucRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.ACCESS_USER_JOIN_GROUP_ACK:
                return AccessUserJoinMucAckModel.createMessageModel().convertMessageToModel(message);

            case OpCode.REFUSE_USER_JOIN_MUC_REQUEST:
                return RefuseUserJoinMucRequestModel.createMessageModel().convertMessageToModel(message);
            case OpCode.REFUSE_USER_JOIN_MUC_ACK:
                return RefuseUserJoinMucAckModel.createMessageModel().convertMessageToModel(message);


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
