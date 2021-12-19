import { ClsHooksStrategy } from '../session-strategy/cls-hooks-strategy';
import { NextFunction, Request, Response } from 'express';
export declare class ExpressClsHooksHelper {
    protected readonly _clsHooksStrategy: ClsHooksStrategy;
    constructor(params: {
        clsHooksStrategy: ClsHooksStrategy;
    });
    expressMiddleware(_req: Request, _res: Response, next: NextFunction): void;
    expressMiddlewareBindEmitter(req: Request, res: Response, next: NextFunction): void;
}
export declare const clsHooksExpressHelperFactory: (params: {
    clsHooksStrategy: ClsHooksStrategy;
}) => ExpressClsHooksHelper;
//# sourceMappingURL=express-cls-hooks-helper.d.ts.map