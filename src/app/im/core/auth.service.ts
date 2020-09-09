import {Injectable, OnDestroy} from '@angular/core';
import {WebSocketService} from './web-socket.service';
import {SubscriptionLike} from 'rxjs';
import {OpCode} from './op-code.enum';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy {

    readonly authSub: SubscriptionLike;
    readonly openSub: SubscriptionLike;

    constructor(private webSocketService: WebSocketService) {
        // 订阅认证确认响应
        this.authSub = webSocketService.messages$(OpCode.AUTH_ACK).subscribe({
            next: () => {
                // 修改WebSocket状态为:WsStatus.AUTHED
            }
        });

        // 订阅打开链接，然后发送token 认证连接
        this.openSub = this.webSocketService.openSubject({
            next: (event: Event) => {
                // 发送认证请求
                console.log('发送认证请求!');
            }
        });
    }

    ngOnDestroy(): void {
        if (this.authSub && !this.authSub.closed) {
            this.authSub.unsubscribe();
            this.openSub.unsubscribe();
        }
    }

}
