import {Message} from './lib/Message_pb';
import * as OpCode_pb from './lib/OpCode_pb';
import {ImConfig, injector} from '../im.config';
import {DbUtil} from './db-util';

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
        message.setMagic(injector.get(ImConfig).protocol.magic);
        message.setVersion(injector.get(ImConfig).protocol.version);
        message.setSeq(new Date().getTime().toString());
        this.seq = message.getSeq();
        DbUtil.instance.storageMessageModel(this);
        return message;
    }

    abstract convertToMessage(): Message;

    abstract convertMessageToModel(message: Message): BaseModel;
}

