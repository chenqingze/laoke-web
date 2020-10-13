import {BaseModel} from '../../core/base.model';
import {OpCode} from '../../core/lib/OpCode_pb';
import {Message} from '../../core/lib/Message_pb';
import {CreateGroupRequest} from '../../core/lib/Group_pb';

export class CreateGroupRequestModel extends BaseModel {
    readonly opCode = OpCode.CREATE_GROUP_REQUEST;

    groupId;
    header;
    name;
    owner;
    userList;

    convertMessageToModel(message: Message): BaseModel {
        const createGroupRequest = message.getCreateGroupRequest();
        this.groupId = createGroupRequest.getGroupId();
        this.header = createGroupRequest.getHeader();
        this.name = createGroupRequest.getName();
        this.owner = createGroupRequest.getOwner();
        this.userList = createGroupRequest.getUsersList();
        return this;
    }

    convertToMessage(): Message {
        const createGroupRequest = new CreateGroupRequest();
        createGroupRequest.setGroupId(this.groupId);
        createGroupRequest.setHeader(this.header);
        createGroupRequest.setName(this.name);
        createGroupRequest.setOwner(this.owner);
        createGroupRequest.setUsersList(this.userList);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setCreateGroupRequest(createGroupRequest);
        return message;
    }

}
