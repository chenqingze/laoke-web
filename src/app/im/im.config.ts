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


