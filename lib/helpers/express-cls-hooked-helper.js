"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressClsHookedHelperFactory = exports.ExpressClsHookedHelper = void 0;
class ExpressClsHookedHelper {
    constructor(params) {
        const { clsHookedStrategy } = params;
        this._clsHookedStrategy = clsHookedStrategy;
    }
    expressMiddleware(_req, _res, next) {
        this._clsHookedStrategy.createSession(next);
    }
    expressMiddlewareBindEmitter(req, res, next) {
        this._clsHookedStrategy.NS.bindEmitter(req);
        this._clsHookedStrategy.NS.bindEmitter(res);
        next();
    }
}
exports.ExpressClsHookedHelper = ExpressClsHookedHelper;
const expressClsHookedHelperFactory = (params) => {
    return new ExpressClsHookedHelper(params);
};
exports.expressClsHookedHelperFactory = expressClsHookedHelperFactory;
//# sourceMappingURL=express-cls-hooked-helper.js.map