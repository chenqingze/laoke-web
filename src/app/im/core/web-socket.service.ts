import {Injectable, OnDestroy} from '@angular/core';
import {WebSocketSubject, WebSocketSubjectConfig} from 'rxjs/internal-compatibility';
import {Observable, Observer, PartialObserver, Subject, Subscription} from 'rxjs';
import * as Message_pb from './lib/Message_pb.js';
import {OpCode} from './op-code.enum';
import {ImConfig} from '../im.config';
import {ProtocolService} from './protocol.service';
import {webSocket} from 'rxjs/webSocket';
import {MessageModel} from './message.model';

const enum WsStatus {
    DISCONNECTED,
    CONNECTED,
    AUTHED
}


@Injectable({
    providedIn: 'root'
})
export class WebSocketService implements OnDestroy {

    private readonly reconnectInterval: number; // 重连时间间隔
    private readonly reconnectAttempts: number; // 重连次数
    private readonly heartbeatInterval: number; // 心跳间隔

    // private statusSub: SubscriptionLike;
    // private heartbeatSub: SubscriptionLike;
    // private reconnection$: Observable<number>;
    private webSocketSubject: WebSocketSubject<any>;
    private onOpenSubject: Subject<Event>;
    private onCloseSubject: Subject<CloseEvent>;

    // private wsMessages$: Subject<Message_pb.MessageModel>;
    // private statusObserver$: Observer<WsStatus>;
    // public status$: Observable<WsStatus>;
    // private status: WsStatus;
    //
    // private isConnecting = false;


    // public loading;
    // public failedMsgModel: { payload: any, opCode: OpCode };
    // public isFailed = false;

    constructor(private imConfig: ImConfig, private protocolService: ProtocolService) {
        // const msg = new Message_pb.MessageModel();
    }


    /**
     * 建立websocket连接
     */
    connect() {
        this.webSocketSubject.subscribe();
        // 建立连接成功修改连接状态
        this.openSubject({
            next: () => {
                // 修改WebSocket状态为：WsStatus.CONNECTED
            }
        });
    }

    /**
     * 断开连接
     */
    disconnect() {
        this.webSocketSubject.complete();
    }

    /**
     * 订阅消息事件
     * @param opCode 事件类型
     */
    messages$(opCode: OpCode): Observable<any> {
        return this.webSocketSubject.multiplex(
            () => ({subscribe: opCode}),
            () => ({unsubscribe: opCode}),
            (message: Message_pb.Message) => message.getOpCode() === opCode
        );
    }


    /**
     * 订阅socket连接事件
     * @param observer
     */
    openSubject(observer: PartialObserver<any>): Subscription {
        return this.onOpenSubject.subscribe(observer);
    }

    /**
     * 订阅socket 连接关闭事件
     * @param observer
     */
    closeSubject(observer: PartialObserver<any>): Subscription {
        return this.onCloseSubject.subscribe(observer);
    }


    ngOnDestroy(): void {
    }

    /**
     * 重连
     * @private
     */
    private reconnect() {

    }

    /**
     * 心跳
     * @private
     */
    private heartbeat() {

    }

    /**
     * 创建websocket
     */
    private createSocket() {
        this.webSocketSubject = webSocket(this.initWebSocketConfig());
    }

    /**
     * 初始化websocket配置
     */
    private initWebSocketConfig(): WebSocketSubjectConfig<Message_pb.Message> {
        this.onOpenSubject = new Subject();
        this.onCloseSubject = new Subject();
        // 初始化websocket配置信息
        return {
            url: this.imConfig.ws.url,
            serializer: (messageModel: MessageModel) => messageModel.convertToMessagePb().serializeBinary(),
            deserializer: (e: MessageEvent) => Message_pb.Message.deserializeBinary(e.data),
            binaryType: 'arraybuffer',
            closeObserver: this.onCloseSubject,
            openObserver: this.onOpenSubject
        };
    }


}
