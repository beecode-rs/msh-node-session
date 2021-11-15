"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeSessionUtilFactory = exports.NodeSessionUtil = void 0;
const node_session_dao_1 = require("./node-session-dao");
class NodeSessionUtil {
    constructor(props = {}) {
        const { nodeSessionDao = new node_session_dao_1.NodeSessionDao() } = props;
        this._dao = nodeSessionDao;
    }
    createAsyncSession(callback) {
        return new Promise((resolve, reject) => {
            this._dao.NS.run(() => {
                callback().then(resolve).catch(reject);
            });
        });
    }
    createSession(callback) {
        this._dao.NS.run(() => callback());
    }
    expressMiddleware(_req, _res, next) {
        this.createSession(next);
    }
    expressMiddlewareBindEmitter(req, res, next) {
        this._dao.NS.bindEmitter(req);
        this._dao.NS.bindEmitter(res);
        next();
    }
}
exports.NodeSessionUtil = NodeSessionUtil;
const nodeSessionUtilFactory = (params = {}) => {
    return new NodeSessionUtil(params);
};
exports.nodeSessionUtilFactory = nodeSessionUtilFactory;
//# sourceMappingURL=node-session-util.js.map