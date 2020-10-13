import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ChangeGroupNoticeRequest} from '../../core/lib/Group_pb';

export class EditGroupNoticeRequestModel extends BaseModel {
    readonly opCode = OpCode.EDIT_GROUP_NOTICE_REQUEST;

    groupId;
    notice;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const changeGroupNoticeRequest = message.getChangeGroupNoticeRequest();
        this.groupId = changeGroupNoticeRequest.getGroupId();
        this.notice = changeGroupNoticeRequest.getNotice();
        this.message = changeGroupNoticeRequest.getMessage();
        this.success = changeGroupNoticeRequest.getSuccess();
        return this;
    }

    convertToMessage(): Message {
        const changeGroupNoticeRequest = new ChangeGroupNoticeRequest();

        changeGroupNoticeRequest.setGroupId(this.groupId);
        changeGroupNoticeRequest.setMessage(this.message);
        changeGroupNoticeRequest.setNotice(this.notice);
        changeGroupNoticeRequest.setSuccess(this.success);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setChangeGroupNoticeRequest(changeGroupNoticeRequest);
        return message;
    }

}
