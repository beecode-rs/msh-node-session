"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressFastAlsHelperFactory = exports.ExpressFastAlsHelper = void 0;
class ExpressFastAlsHelper {
    constructor(params) {
        const { fastAlsStrategy } = params;
        this._fastAlsStrategy = fastAlsStrategy;
    }
    expressMiddleware(_req, _res, next) {
        this._fastAlsStrategy.createSession(next);
    }
}
exports.ExpressFastAlsHelper = ExpressFastAlsHelper;
const expressFastAlsHelperFactory = (params) => {
    return new ExpressFastAlsHelper(params);
};
exports.expressFastAlsHelperFactory = expressFastAlsHelperFactory;
//# sourceMappingURL=express-fast-als-helper.js.map