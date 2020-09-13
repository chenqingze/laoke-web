import {Injector} from '@angular/core';
import {environment} from '../../environments/environment';

export class ImConfig {
    protocol: {
        magic: string; // 魔数
        version: number; // 版本号
    };
    ws: {
        url: string;
        reconnectInterval?: number;
        reconnectAttempts?: number;
        heartbeatInterval?: number;
    };
}

export const injector = Injector.create({
    providers: [
        {provide: ImConfig, useValue: environment.im},
    ],
});
