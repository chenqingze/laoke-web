// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {ImConfig} from '../app/im/im.config';

export const environment = {
    production: true,
    // 聊天配置
    im: {

        protocol: {
            magic: '0xCAFEBABE', // 魔数
            version: 1 // 版本号
        },
        ws: {
            url: 'ws://localhost:9966/ws',
            reconnectInterval: 5_000, // 重连时间间隔
            reconnectAttempts: 5, // 重连次数
            heartbeatInterval: 1_00000 // 心跳时间间隔
        }
    } as ImConfig,
    msgApiUrl: 'http://localhost:8080'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
