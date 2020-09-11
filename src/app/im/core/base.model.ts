import {Message} from './lib/Message_pb';
import * as OpCode_pb from './lib/OpCode_pb';

type Constructor<M> = new(...args: any[]) => M;

export abstract class BaseModel {
    abstract readonly opCode: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap];

    static createMessageModel<T extends BaseModel>(this: Constructor<T>): T {
        return new this();
    }
    abstract convertToMessage(): Message;

    abstract convertMessageToModel(message: Message): BaseModel;
}

