import {Injectable} from '@angular/core';
import {ImConfig} from '../im.config';
import {Message} from './lib/Message_pb';
import * as OpCode_pb from './lib/OpCode_pb';

/**
 * @deprecated 废弃
 * @since 2.0
 */
@Injectable({
    providedIn: 'root'
})
export class ProtocolService {

    constructor(private imConfig: ImConfig) {
    }

    /**
     * Serializes to a UInt8Array
     * @param payload 负载
     * @param opCode 操作码
     */
    // messageEncoder(messageModel: MessageModel): Uint8Array {
    //     // const message = new Message_pb.Message();
    //     // message.setMagic(this.imConfig.protocol.magic);
    //     // message.setVersion(this.imConfig.protocol.version);
    //     // message.setSeq(new Date().getUTCMilliseconds().toString());
    //     // switch (messageModel.opCode) {
    //     //     default:
    //     //         break;
    //     // }
    //     return messageModel.convertToMessagePb().serializeBinary();
    // }

    /**
     * 解码二进制数据
     * @param data 二进制数据缓冲区数据
     */
    // public messageDecoder(data: Uint8Array): Message_pb.Message {
    //     return Message_pb.Message.deserializeBinary(data);
    // }

    /**
     * 转换protobuf协议 Message_pb.Message到 model
     */
    convertMessageToModel(messageProtoBuf: Message): any {
        const opCode: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap] = messageProtoBuf.getOpCode();
        switch (opCode) {
            default:
                return messageProtoBuf;
        }
    }
}
