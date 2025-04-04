import { type NextFunction, type Request, type Response } from 'express';
import { type FastAlsStrategy } from '#src/session-strategy/fast-als-strategy';
export declare class ExpressFastAlsHelper {
    protected readonly _fastAlsStrategy: FastAlsStrategy;
    constructor(params: {
        fastAlsStrategy: FastAlsStrategy;
    });
    expressMiddleware(_req: Request, _res: Response, next: NextFunction): void;
}
export declare const expressFastAlsHelperFactory: (params: {
    fastAlsStrategy: FastAlsStrategy;
}) => ExpressFastAlsHelper;
//# sourceMappingURL=express-fast-als-helper.d.ts.map