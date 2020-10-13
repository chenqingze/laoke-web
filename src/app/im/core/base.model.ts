import {Message} from './lib/Message_pb';
import * as OpCode_pb from './lib/OpCode_pb';
import {OpCode} from './lib/OpCode_pb';
import {ImConfig} from '../im.config';
import {imInjector} from '../ImInjector';

type Constructor<M> = new(...args: any[]) => M;

export abstract class BaseModel {
    seq: string;
    abstract readonly opCode: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap];

    static createMessageModel<T extends BaseModel>(this: Constructor<T>): T {
        return new this();
    }

    /**
     * 创建带有通用属性的基础实例Message_pb.Message
     */
    createMessage(): Message {
        const message = new Message();
        message.setMagic(imInjector.get(ImConfig).protocol.magic);
        message.setVersion(imInjector.get(ImConfig).protocol.version);
        message.setSeq(new Date().getTime().toString());
        this.seq = message.getSeq();
        this.storeMessageModel(this);
        return message;

    }

    abstract convertToMessage(): Message;

    abstract convertMessageToModel(message: Message): BaseModel;

    storeMessageModel(model: BaseModel) {
        switch (model.opCode) {
            case OpCode.QUERY_USER_GROUP_ACK:
                // todo :存数据库；
                break;
            default:
                // 这里处理所有不需要存库的类型
                break;
        }
    }
}

