import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {ChangeGroupNoticeAck} from '../../core/lib/Group_pb';

export class EditGroupNoticeAckModel extends BaseModel {
    readonly opCode = OpCode.EDIT_GROUP_NOTICE_ACK;
    groupId;
    notice;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const changeGroupNoticeAck = message.getChangeGroupNoticeAck();
        this.groupId = changeGroupNoticeAck.getGroupId();
        this.notice = changeGroupNoticeAck.getNotice();
        this.message = changeGroupNoticeAck.getMessage();
        this.success = changeGroupNoticeAck.getSuccess();
        return this;
    }

    convertToMessage(): Message {
        const changeGroupNoticeAck = new ChangeGroupNoticeAck();

        changeGroupNoticeAck.setGroupId(this.groupId);
        changeGroupNoticeAck.setMessage(this.message);
        changeGroupNoticeAck.setNotice(this.notice);
        changeGroupNoticeAck.setSuccess(this.success);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setChangeGroupNoticeAck(changeGroupNoticeAck);
        return message;
    }

}
