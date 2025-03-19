import { type NextFunction, type Request, type Response } from 'express';
import { type AsyncLocalStorageStrategy } from '#src/session-strategy/async-local-storage-strategy';
export declare class ExpressAsyncLocalStorageHelper {
    protected readonly _asyncLocalStorageStrategy: AsyncLocalStorageStrategy;
    constructor(params: {
        asyncLocalStorageStrategy: AsyncLocalStorageStrategy;
    });
    expressMiddleware(_req: Request, _res: Response, next: NextFunction): void;
}
export declare const expressAsyncLocalStorageHelperFactory: (params: {
    asyncLocalStorageStrategy: AsyncLocalStorageStrategy;
}) => ExpressAsyncLocalStorageHelper;
//# sourceMappingURL=express-async-local-storage-helper.d.ts.map