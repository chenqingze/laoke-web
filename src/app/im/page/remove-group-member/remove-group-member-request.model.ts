import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {RemoveGroupMemberRequest} from '../../core/lib/Group_pb';

export class RemoveGroupMemberRequestModel extends BaseModel {
    readonly opCode = OpCode.DETACH_USER_FROM_GROUP_REQUEST;

    groupId;
    user: string[];
    currentUser;
    message;
    success;

    convertMessageToModel(message: Message): BaseModel {
        const removeGroupMemberRequest = message.getRemoveGroupMemberRequest();
        this.groupId = removeGroupMemberRequest.getGroupId();
        this.user = removeGroupMemberRequest.getUserList();
        this.currentUser = removeGroupMemberRequest.getCurrentUser();
        this.message = removeGroupMemberRequest.getMessage();
        this.success = removeGroupMemberRequest.getSuccess();
        return this;
    }

    convertToMessage(): Message {
        const removeGroupMemberRequest = new RemoveGroupMemberRequest();
        removeGroupMemberRequest.setCurrentUser(this.currentUser);
        removeGroupMemberRequest.setGroupId(this.groupId);
        removeGroupMemberRequest.setMessage(this.message);
        removeGroupMemberRequest.setSuccess(this.success);
        removeGroupMemberRequest.setUserList(this.user);

        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setRemoveGroupMemberRequest(removeGroupMemberRequest);
        return message;
    }

}
