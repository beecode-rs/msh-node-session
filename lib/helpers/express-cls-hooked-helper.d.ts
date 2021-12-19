import { ClsHookedStrategy } from '../session-strategy/cls-hooked-strategy';
import { NextFunction, Request, Response } from 'express';
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