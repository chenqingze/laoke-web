import {OpCode} from './op-code.enum';
import * as Message_pb from './lib/Message_pb.js';

export interface MessageModel {
    readonly opCode: OpCode;
    convertToMessagePb(): Message_pb.Message;
}

