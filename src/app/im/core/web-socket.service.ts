import {Injectable, OnDestroy} from '@angular/core';
import {WebSocketSubject, WebSocketSubjectConfig} from 'rxjs/internal-compatibility';
import {Observable, Observer, PartialObserver, Subject, Subscription} from 'rxjs';
import {ImConfig} from '../im.config';
import {webSocket} from 'rxjs/webSocket';
import {MessageModel} from './message.model';
import {Message} from './lib/Message_pb';
import * as OpCode_pb from './lib/OpCode_pb';

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

    constructor(private imConfig: ImConfig) {
        console.log('websocket 配置', imConfig);
        // const msg = new Message_pb.MessageModel();
        this.connect();
    }


    /**
     * 建立websocket连接
     */
    connect() {
        this.createSocket();
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
    messages$(opCode: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap]): Observable<any> {
        return this.webSocketSubject.multiplex(
            () => ({subscribe: opCode}),
            () => ({unsubscribe: opCode}),
            (message: Message) => message.getOpCode() === opCode
        );
    }

    sendMessage(messageModel: MessageModel): void {
        this.webSocketSubject.next(messageModel);
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
    private initWebSocketConfig(): WebSocketSubjectConfig<any> {
        this.onOpenSubject = new Subject();
        this.onCloseSubject = new Subject();
        // 初始化websocket配置信息
        return {
            url: this.imConfig.ws.url,
            serializer: (messageModel: MessageModel) => messageModel.convertToMessage().serializeBinary(),
            deserializer: (e: MessageEvent) => Message.deserializeBinary(e.data),
            binaryType: 'arraybuffer',
            closeObserver: this.onCloseSubject,
            openObserver: this.onOpenSubject
        };
    }


}
