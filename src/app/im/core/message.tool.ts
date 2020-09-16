import {ImConfig, injector} from '../im.config';
import {Message} from './lib/Message_pb';
import * as OpCode_pb from './lib/OpCode_pb';
import {OpCode} from './lib/OpCode_pb';
import {BaseModel} from './base.model';
import {AuthAckModel} from '../auth/auth-ack.model';


export class MessageTool {
    /**
     * 创建带有通用属性的基础实例Message_pb.Message
     */
    static createMessage(): Message {
        const message = new Message();
        message.setMagic(injector.get(ImConfig).protocol.magic);
        message.setVersion(injector.get(ImConfig).protocol.version);
        message.setSeq(new Date().getMilliseconds());
        return message;
    }

    /**
     * 转换protobuf协议 Message_pb.Message到 model
     */
    static convertMessageToModel(message: Message): BaseModel {
        const opCode: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap] = message.getOpCode();
        switch (opCode) {
            case OpCode.AUTH_ACK:
                return AuthAckModel.createMessageModel().convertMessageToModel(message);
            case OpCode.UNKNOWN:
            default:
                throw new Error('opCode is not found.');
        }
    }
}
