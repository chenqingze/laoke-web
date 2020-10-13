import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {CreateGroupAck} from '../../core/lib/Group_pb';

export class CreateGroupAckModel extends BaseModel {
    readonly opCode = OpCode.CREATE_GROUP_ACK;
    success;
    message;
    groupId;
    owner;
    name;
    header;
    groupNo;

    convertMessageToModel(message: Message): BaseModel {
        const createGroupAck = message.getCreateGroupAck();
        this.groupId = createGroupAck.getGroupId();
        this.header = createGroupAck.getHeader();
        this.name = createGroupAck.getName();
        this.owner = createGroupAck.getOwner();
        this.success = createGroupAck.getSuccess();
        this.message = createGroupAck.getMessage();
        this.groupNo = createGroupAck.getGroupNo();
        return this;
    }

    convertToMessage(): Message {
        const createGroupAck = new CreateGroupAck();
        createGroupAck.setGroupId(this.groupId);
        createGroupAck.setHeader(this.header);
        createGroupAck.setName(this.name);
        createGroupAck.setOwner(this.owner);
        createGroupAck.setSuccess(this.success);
        createGroupAck.setMessage(this.message);
        createGroupAck.setGroupNo(this.groupNo);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setCreateGroupAck(createGroupAck);
        return message;
    }

}
