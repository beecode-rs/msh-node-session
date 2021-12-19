"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeSessionUtil = void 0;
const cls_hooked_strategy_1 = require("./session-strategy/cls-hooked-strategy");
class NodeSessionUtil {
    constructor(props) {
        const { sessionStrategy = new cls_hooked_strategy_1.ClsHookedStrategy() } = props !== null && props !== void 0 ? props : {};
        this._strategy = sessionStrategy;
    }
    createAsyncSession(callback) {
        return new Promise((resolve, reject) => {
            this._strategy.createSession(() => {
                callback().then(resolve).catch(reject);
            });
        });
    }
    createSession(callback) {
        this._strategy.createSession(callback);
    }
}
exports.NodeSessionUtil = NodeSessionUtil;
//# sourceMappingURL=node-session-util.js.map