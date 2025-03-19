import { AsyncLocalStorage } from 'node:async_hooks';
import { type CreateSessionOptions, type SessionStrategy } from '#src/session-strategy/session-strategy';
export declare class AsyncLocalStorageStrategy implements SessionStrategy {
    protected readonly _storage: AsyncLocalStorage<Map<string, unknown>>;
    get<T>(key: string): T | undefined;
    set<T>(key: string, value: T): void;
    clear(key: string): void;
    createSession(callback: () => void, options?: CreateSessionOptions): void;
    protected _throwErrorIfInactiveContext(store?: Map<string, unknown>): void;
}
//# sourceMappingURL=async-local-storage-strategy.d.ts.map