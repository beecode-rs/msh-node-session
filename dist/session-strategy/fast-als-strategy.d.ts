import { CreateSessionOptions, SessionStrategy } from '../session-strategy/session-strategy.js';
export declare class FastAlsStrategy implements SessionStrategy {
    clear(key: string): void;
    createSession(callback: () => void, options?: CreateSessionOptions): void;
    get<T>(key: string): T | undefined;
    set<T>(key: string, value: T): void;
}
//# sourceMappingURL=fast-als-strategy.d.ts.map