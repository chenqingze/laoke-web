import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {CreateGroupRequest, InvitationJoinGroupRequest} from '../../core/lib/Group_pb';

export class InvitationUserJoinGroupRequestModel extends BaseModel {

    groupId;
    user: string[];
    currentUser;
    message;
    success;

    readonly opCode = OpCode.INVITATION_USER_JOIN_GROUP_REQUEST;

    convertMessageToModel(message: Message): BaseModel {
        const invitationJoinGroupRequest = message.getInvitationJoinGroupRequest();
        this.groupId = invitationJoinGroupRequest.getGroupId();
        this.user = invitationJoinGroupRequest.getUserList();
        this.currentUser = invitationJoinGroupRequest.getCurrentUser();
        this.message = invitationJoinGroupRequest.getMessage();
        this.success = invitationJoinGroupRequest.getSuccess();
        return this;
    }

    convertToMessage(): Message {
        const invitationUserJoinGroupRequest = new InvitationJoinGroupRequest();
        invitationUserJoinGroupRequest.setCurrentUser(this.currentUser);
        invitationUserJoinGroupRequest.setGroupId(this.groupId);
        invitationUserJoinGroupRequest.setMessage(this.message);
        invitationUserJoinGroupRequest.setSuccess(this.success);
        invitationUserJoinGroupRequest.setUserList(this.user);

        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setInvitationJoinGroupRequest(invitationUserJoinGroupRequest);
        return message;
    }

}
