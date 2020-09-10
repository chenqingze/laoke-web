import {Injectable, OnDestroy} from '@angular/core';
import {WebSocketService} from '../core/web-socket.service';
import {SubscriptionLike} from 'rxjs';
import {AuthRequestModel} from './auth-request.model';
import {OpCode} from '../core/lib/OpCode_pb';
import {Message} from '../core/lib/Message_pb';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy {

    readonly authSub: SubscriptionLike;
    readonly openSub: SubscriptionLike;

    constructor(private webSocketService: WebSocketService) {
        // 订阅打开链接，然后发送token 认证连接
        this.openSub = this.webSocketService.openSubject({
            next: (event: Event) => {
                // 发送认证请求
                console.log('发送认证请求!');
                const authRequest = new AuthRequestModel();
                this.webSocketService.sendMessage(authRequest);
            }
        });
        // 订阅认证确认响应
        // this.authSub = webSocketService.messages$(1).subscribe({
        //     next: (message) => {
        //         // 修改WebSocket状态为:WsStatus.AUTHED
        //         console.log('收到消息！');
        //         console.log(message);
        //     },
        //     error: (err: any) => {
        //         console.log('error！', err);
        //
        //     }
        // });
    }

    ngOnDestroy(): void {
        // if (this.authSub && !this.authSub.closed) {
        //     this.authSub.unsubscribe();
        //     this.openSub.unsubscribe();
        // }
    }

}
