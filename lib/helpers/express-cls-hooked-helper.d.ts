import { type NextFunction, type Request, type Response } from 'express';
import { type ClsHookedStrategy } from '../session-strategy/cls-hooked-strategy.js';
export declare class ExpressClsHookedHelper {
    protected readonly _clsHookedStrategy: ClsHookedStrategy;
    constructor(params: {
        clsHookedStrategy: ClsHookedStrategy;
    });
    expressMiddleware(_req: Request, _res: Response, next: NextFunction): void;
    expressMiddlewareBindEmitter(req: Request, res: Response, next: NextFunction): void;
}
export declare const expressClsHookedHelperFactory: (params: {
    clsHookedStrategy: ClsHookedStrategy;
}) => ExpressClsHookedHelper;
//# sourceMappingURL=express-cls-hooked-helper.d.ts.map