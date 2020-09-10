import {MessageModel} from '../core/message.model';
import {OpCode} from '../core/lib/OpCode_pb';
import {Message} from '../core/lib/Message_pb';
import {AuthAck} from '../core/lib/Connection_pb';
import {MessageTool} from '../core/message.tool';

export class AuthAckModel implements MessageModel {
    readonly opCode = OpCode.AUTH_ACK;
    result: boolean;
    sessionId: string;
    info: string;

    convertMessageToModel(message: Message): MessageModel {
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
        const message = MessageTool.createMessage();
        message.setOpCode(this.opCode);
        message.setAuthAck(authAck);
        return message;
    }
}
