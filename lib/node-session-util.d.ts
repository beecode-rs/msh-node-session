import { type SessionStrategy } from './session-strategy/session-strategy.js';
export declare class NodeSessionUtil {
    protected readonly _strategy: SessionStrategy;
    constructor(props?: {
        sessionStrategy?: SessionStrategy;
    });
    createAsyncSession<T = any>(callback: () => Promise<T>): Promise<T>;
    createSession(callback: () => void): void;
}
//# sourceMappingURL=node-session-util.d.ts.map