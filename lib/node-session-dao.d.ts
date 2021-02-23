export declare const _nsid = "node-session-context-id-89a2af34c0a3f";
export declare const nodeSessionDao: {
    _ns: import("cls-hooked").Namespace;
    _throwErrorIfInactiveContext: () => void;
    get: <T>(key: string) => T | undefined;
    set: <T_1>(key: string, value: T_1) => void;
    clear: (key: string) => void;
    createAsync: <T_2>(callback: () => Promise<T_2>) => Promise<T_2>;
};
//# sourceMappingURL=node-session-dao.d.ts.map