import {ImConfig} from '../im.config';
import {environment} from '../../../environments/environment';
import {Injector} from '@angular/core';
import {Message} from './lib/Message_pb';
import {OpCode, OpCodeMap} from './lib/OpCode_pb';
import * as OpCode_pb from './lib/OpCode_pb';
import {MessageModel} from './message.model';

const injector = Injector.create({
    providers: [
        {provide: ImConfig, useValue: environment.im},
    ],
});

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
    // static convertMessageToModel(message: Message): MessageModel {
    //     const opCode: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap] = message.getOpCode();
    //     switch (opCode) {
    //         default:
    //             throw new Error('opCode is not found.');
    //     }
    // }
}
