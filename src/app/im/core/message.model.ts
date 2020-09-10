import {Message} from './lib/Message_pb';
import * as OpCode_pb from './lib/OpCode_pb';

export interface MessageModel {
    readonly opCode: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap];

    convertToMessage(): Message;

    convertMessageToModel(message: Message): MessageModel;
}

