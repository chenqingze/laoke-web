import {BaseModel} from '../core/base.model';
import {OpCode} from '../core/lib/OpCode_pb';
import {Message} from '../core/lib/Message_pb';
import {AuthAck} from '../core/lib/Connection_pb';

export class AuthAckModel extends BaseModel {
    readonly opCode = OpCode.AUTH_ACK;
    result: boolean;
    sessionId: string;
    info: string;

    convertMessageToModel(message: Message): BaseModel {
        const authAck = message.getAuthAck();
        this.result = authAck.getResult();
        this.sessionId = authAck.getSessionId();
        this.info = authAck.getInfo();
        return this;
    }

    convertToMessage(): Message {
        const authAck = new AuthAck();
        authAck.setResult(this.result);
        authAck.setSessionId(this.sessionId);
        authAck.setInfo(this.info);
        const message = this.createMessage();
        message.setOpCode(this.opCode);
        message.setAuthAck(authAck);
        return message;
    }

}
