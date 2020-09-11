import {BaseModel} from '../core/base.model';
import {MessageTool} from '../core/message.tool';
import {OpCode} from '../core/lib/OpCode_pb';
import {AuthRequest} from '../core/lib/Connection_pb';
import {Message} from '../core/lib/Message_pb';

export class AuthRequestModel extends BaseModel {
    readonly opCode = OpCode.AUTH_REQUEST;
    token: string; // 用户token
    deviceCode: string; // 设备号
    deviceIdiom: string; // 设备类型:Desktop、Phone、Tablet、Unknown
    devicePlatform: string; // 客户端平台:Android、iOS、Unknown


    convertMessageToModel(message: Message): BaseModel {
        const authRequest = message.getAuthRequest();
        this.token = authRequest.getToken();
        this.deviceCode = authRequest.getDeviceCode();
        this.deviceIdiom = authRequest.getDeviceIdiom();
        this.devicePlatform = authRequest.getDevicePlatform();
        return this;
    }

    convertToMessage(): Message {
        const authRequest = new AuthRequest();
        authRequest.setToken(this.token);
        authRequest.setDeviceCode(this.deviceCode);
        authRequest.setDeviceIdiom(this.deviceIdiom);
        authRequest.setDevicePlatform(this.devicePlatform);
        // 测试,todo: 测试完成后删除
        authRequest.setToken('test_token');
        authRequest.setDeviceCode('test_code');
        authRequest.setDeviceIdiom('test_idiom');
        authRequest.setDevicePlatform('test_platform');
        const message = MessageTool.createMessage();
        message.setOpCode(this.opCode);
        message.setAuthRequest(authRequest);
        return message;
    }
}
