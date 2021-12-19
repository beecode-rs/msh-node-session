import { CreateSessionOptions, SessionStrategy } from './session-strategy';
import { Namespace } from 'cls-hooked';
export declare const _defaultNameSpaceId = "node-session-context-id-89a2af34c0a3f";
export declare class ClsHooksStrategy implements SessionStrategy {
    protected readonly _ns: Namespace;
    get NS(): Namespace;
    constructor(params?: {
        nameSpaceId?: string;
    });
    get<T>(key: string): T | undefined;
    set<T>(key: string, value: T): void;
    clear(key: string): void;
    createSession(callback: () => void, options?: CreateSessionOptions): void;
    protected _throwErrorIfInactiveContext(): void;
}
//# sourceMappingURL=cls-hooks-strategy.d.ts.map