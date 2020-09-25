import {Injectable, OnDestroy} from '@angular/core';
import {WebSocketSubject, WebSocketSubjectConfig} from 'rxjs/internal-compatibility';
import {Observable, of, PartialObserver, Subject, Subscription, SubscriptionLike, timer} from 'rxjs';
import {ImConfig} from '../im.config';
import {webSocket} from 'rxjs/webSocket';
import {BaseModel} from './base.model';
import {Message} from './lib/Message_pb';
import * as OpCode_pb from './lib/OpCode_pb';
import {OpCode} from './lib/OpCode_pb';
import {AuthRequestModel} from '../auth/auth-request.model';
import {MessageTool} from './message.tool';
import {delay, filter, retryWhen} from 'rxjs/operators';

export const enum WsStatus {
    DISCONNECTED,
    CONNECTED,
    AUTHED
}


@Injectable({
    providedIn: 'root'
})
export class WebSocketService implements OnDestroy {

    // private statusSub: SubscriptionLike;
    // private heartbeatSub: SubscriptionLike;
    // private reconnection$: Observable<number>;
    // private statusObserver$: Observer<WsStatus>;
    public status$: Subject<WsStatus>;
    // private isConnecting = false;

    private status: WsStatus = WsStatus.DISCONNECTED;
    private webSocketSubject: WebSocketSubject<BaseModel>;
    private openSubject: Subject<Event>;
    private closeSubject: Subject<CloseEvent>;
    private wsMessages$: Subject<BaseModel>;
    private authSub: SubscriptionLike;


    constructor(private imConfig: ImConfig) {
        console.log('websocket 配置', imConfig);
        this.wsMessages$ = new Subject<BaseModel>();
        this.status$ = new Subject<WsStatus>();
        this.status$.subscribe((connectStatus) => {
            this.status = connectStatus;
        });
        this.connect();
    }


    /**
     * 建立websocket连接
     */
    connect() {
        // 创建socket连接
        this.createSocket();
        // 订阅WebSocket连接事件
        this.openSubject.subscribe({
            next: (event: Event) => {
                // 修改WebSocket状态为：WsStatus.CONNECTED
                console.log('连接打开', event);
                this.status$.next(WsStatus.CONNECTED);
                // todo:发送token 认证
                console.log('发送认证请求!');
                const authRequest = AuthRequestModel.createMessageModel();
                this.sendMessage(authRequest);
            }
        });
        // token认证响应事件
        this.authSub = this.messages$(OpCode.AUTH_ACK).subscribe({
            next: (message) => {
                // todo:修改WebSocket状态为:WsStatus.AUTHED,存储返回信息到storage
                console.log('登录认证成功！');
                console.log(message);
                this.status$.next(WsStatus.AUTHED);
            },
            error: (err: any) => {
                console.log('error！', err);
            }
        });

        // 订阅WebSocket连接关闭事件
        this.closeSubject.subscribe({
            next: () => {
                this.disconnect();
                console.log('连接关闭');
            }
        });
        // 用于接收消息的订阅避免直接使用WebSocketSubject对象接收消息,取消订阅后websocket连接断开
        this.webSocketSubject.pipe(retryWhen((errors) => errors.pipe(delay(10_000)))).subscribe(
            message => {
                console.log('收到消息', message);
                this.wsMessages$.next(message);
            }, error => {
                console.log(error);
            }
        );
    }

    /**
     * 断开连接
     */
    disconnect() {
        this.openSubject.complete();
        this.closeSubject.complete();
        this.webSocketSubject.complete();
    }

    /**
     * 订阅消息事件
     * @param opCodeArg 事件类型
     */
    messages$(opCodeArg: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap]
        | OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap] []): Observable<BaseModel> {
        return this.wsMessages$.pipe(
            filter((model: BaseModel) => this.messageFilterExpression(model, opCodeArg))
        );
    }

    /**
     * 过滤消息类型
     * @param model
     * @param opCodeArg
     * @private
     */
    private messageFilterExpression(model: BaseModel, opCodeArg: OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap]
        | OpCode_pb.OpCodeMap[keyof OpCode_pb.OpCodeMap] []): boolean {
        let result = false;
        if (opCodeArg instanceof Array) {
            for (const opCode of opCodeArg) {
                result = result || (model.opCode === opCode);
            }
        } else {
            result = model.opCode === opCodeArg;
        }

        return result;

    }

    sendMessage(messageModel: BaseModel): void {
        this.webSocketSubject.next(messageModel);
    }


    /**
     * 心跳
     * @private
     */
    private heartbeatSubscription(observer: PartialObserver<any>): Subscription {
        return timer(1_000, 30_000).subscribe(observer);
        // .pipe(
        //     tap(() => this.connect().next('ping')),
        //     concatMap(() => {
        //         return race(
        //             of('timeout').pipe(delay(3_000)),
        //             this.connect().pipe(filter(m => m === 'pong'), catchError(error => of('error')))
        //         );
        //     })
        // );
    }

    /**
     * 是否建立连接
     */
    isConnected(): boolean {
        console.log('调用时此时状态：', this.status);
        return this.status === WsStatus.CONNECTED || this.status === WsStatus.AUTHED;
    }

    /**
     * 是否登录/认证
     */
    isAuthed(): boolean {
        return this.status === WsStatus.AUTHED;
    }

    /**
     * 服务销毁取消订阅
     */
    ngOnDestroy(): void {
        this.disconnect();
        // 取消所有消息事件订阅
        this.wsMessages$.complete();
    }

    /**
     * 重连
     * @private
     */
    private reconnect() {

    }


    /**
     * 创建websocket
     */
    private createSocket() {
        if (!this.webSocketSubject) {
            this.webSocketSubject = webSocket(this.initWebSocketConfig());
        }
        console.log('webSocketSubject is closed ? ', this.webSocketSubject.closed);

    }

    /**
     * 初始化websocket配置
     */
    private initWebSocketConfig(): WebSocketSubjectConfig<BaseModel> {
        this.openSubject = new Subject();
        this.closeSubject = new Subject();
        // 初始化websocket配置信息
        return {
            url: this.imConfig.ws.url,
            serializer: (messageModel) => messageModel.convertToMessage().serializeBinary(),
            deserializer: (e: MessageEvent) => MessageTool.convertMessageToModel(Message.deserializeBinary(e.data)),
            binaryType: 'arraybuffer',
            closeObserver: this.closeSubject,
            openObserver: this.openSubject
        };
    }


}
