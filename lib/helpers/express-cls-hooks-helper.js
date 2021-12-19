"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clsHooksExpressHelperFactory = exports.ExpressClsHooksHelper = void 0;
class ExpressClsHooksHelper {
    constructor(params) {
        const { clsHooksStrategy } = params;
        this._clsHooksStrategy = clsHooksStrategy;
    }
    expressMiddleware(_req, _res, next) {
        this._clsHooksStrategy.createSession(next);
    }
    expressMiddlewareBindEmitter(req, res, next) {
        this._clsHooksStrategy.NS.bindEmitter(req);
        this._clsHooksStrategy.NS.bindEmitter(res);
        next();
    }
}
exports.ExpressClsHooksHelper = ExpressClsHooksHelper;
const clsHooksExpressHelperFactory = (params) => {
    return new ExpressClsHooksHelper(params);
};
exports.clsHooksExpressHelperFactory = clsHooksExpressHelperFactory;
//# sourceMappingURL=express-cls-hooks-helper.js.map