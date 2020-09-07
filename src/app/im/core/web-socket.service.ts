import {Injectable, OnDestroy} from '@angular/core';
import {WebSocketSubject, WebSocketSubjectConfig} from 'rxjs/internal-compatibility';
import {Observable, Observer, Subject, SubscriptionLike} from 'rxjs';


const enum WsStatus {
  CONNECTED,
  DISCONNECTED,
  AUTHED,
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService implements OnDestroy{
  private readonly webSocketSubjectConfig: WebSocketSubjectConfig<any>; // websocket配置
  private readonly reconnectInterval: number; // 重连时间间隔
  private readonly reconnectAttempts: number; // 重连次数
  private readonly heartbeatInterval: number; // 心跳间隔

  private statusSub: SubscriptionLike;
  private heartbeatSub: SubscriptionLike;
  private reconnection$: Observable<number>;
  private websocket$: WebSocketSubject<any>;
  private wsMessages$: Subject<Message_pb.Message>;
  private statusObserver$: Observer<WsStatus>;
  public status$: Observable<WsStatus>;
  private status: WsStatus;

  private isConnecting: boolean = false;

  public receiveMsgSub = new Subject<any>();

  public loading;
  public failedMsgModel: { payload: any, opCode: OpCode };
  public isFailed = false;
  constructor() {

  }

  ngOnDestroy(): void {
  }
}
