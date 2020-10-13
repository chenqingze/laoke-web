import {BaseModel} from '../../../core/base.model';
import {OpCode} from '../../../core/lib/OpCode_pb';
import {Message} from '../../../core/lib/Message_pb';
import {QueryUserGroupsRequest} from '../../../core/lib/Group_pb';

export class QueryGroupRequestModel extends BaseModel {
    userId;
    readonly opCode = OpCode.QUERY_USER_GROUP_REQUEST;

    convertMessageToModel(message: Message): BaseModel {
        const queryUserGroupRequest = message.getQueryUserGroupRequest();
        this.userId = queryUserGroupRequest.getUserId();
        return this;
    }

    convertToMessage(): Message {
        const queryUserGroupsRequest = new QueryUserGroupsRequest();
        queryUserGroupsRequest.setUserId(this.userId);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setQueryUserGroupRequest(queryUserGroupsRequest);
        return message;
    }
}
