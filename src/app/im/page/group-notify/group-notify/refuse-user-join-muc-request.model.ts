import {BaseModel} from '../../../core/base.model';
import {OpCode} from '../../../core/lib/OpCode_pb';
import {Message} from '../../../core/lib/Message_pb';
import {RefuseUserJoinMucRequest} from '../../../core/lib/Group_pb';

export class RefuseUserJoinMucRequestModel extends BaseModel {
    readonly opCode = OpCode.REFUSE_USER_JOIN_MUC_REQUEST;
    groupId;
    userId;
    success;
    message;

    convertMessageToModel(message: Message): BaseModel {
        const refuseUserJoinMucRequest = message.getRefuseUserJoinMucRequest();
        this.groupId = refuseUserJoinMucRequest.getGroupId();
        this.userId = refuseUserJoinMucRequest.getUserId();
        this.success = refuseUserJoinMucRequest.getSuccess();
        this.message = refuseUserJoinMucRequest.getMessage();
        return this;
    }

    convertToMessage(): Message {
        const refuseUserJoinMucRequest = new RefuseUserJoinMucRequest();
        refuseUserJoinMucRequest.setGroupId(this.groupId);
        refuseUserJoinMucRequest.setUserId(this.userId);
        refuseUserJoinMucRequest.setSuccess(this.success);
        refuseUserJoinMucRequest.setMessage(this.message);
        const msg = this.createMessage();
        msg.setOpCode(this.opCode);
        msg.setRefuseUserJoinMucRequest(refuseUserJoinMucRequest);

        return msg;
    }

}
