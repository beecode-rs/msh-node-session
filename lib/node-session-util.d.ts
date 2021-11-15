import { NodeSessionDao } from './node-session-dao';
import { NextFunction, Request, Response } from 'express';
export declare class NodeSessionUtil {
    protected readonly _dao: NodeSessionDao;
    constructor(props?: {
        nodeSessionDao?: NodeSessionDao;
    });
    createAsyncSession<T>(callback: () => Promise<T>): Promise<T>;
    createSession(callback: () => void): void;
    expressMiddleware(_req: Request, _res: Response, next: NextFunction): void;
    expressMiddlewareBindEmitter(req: Request, res: Response, next: NextFunction): void;
}
export declare const nodeSessionUtilFactory: (params?: {
    nodeSessionDao?: NodeSessionDao;
}) => NodeSessionUtil;
//# sourceMappingURL=node-session-util.d.ts.map