import { Namespace } from 'cls-hooked';
export declare const _defaultNameSpaceId = "node-session-context-id-89a2af34c0a3f";
export declare class NodeSessionDao {
    protected readonly _ns: Namespace;
    get NS(): Namespace;
    constructor(params?: {
        nameSpaceId?: string;
    });
    get<T>(key: string): T | undefined;
    set<T>(key: string, value: T): void;
    clear(key: string): void;
    createAsync<T>(callback: () => Promise<T>): Promise<T>;
    protected _throwErrorIfInactiveContext(): void;
}
//# sourceMappingURL=node-session-dao.d.ts.map