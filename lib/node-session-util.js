"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeSessionUtil = void 0;
const node_session_dao_1 = require("./node-session-dao");
exports.nodeSessionUtil = {
    createSession: (callback) => {
        node_session_dao_1.nodeSessionDao._ns.run(() => callback());
    },
    expressMiddleware: (_req, _res, next) => {
        exports.nodeSessionUtil.createSession(next);
    },
    expressMiddlewareBindEmitter: (req, res, next) => {
        node_session_dao_1.nodeSessionDao._ns.bindEmitter(req);
        node_session_dao_1.nodeSessionDao._ns.bindEmitter(res);
        next();
    },
};
//# sourceMappingURL=node-session-util.js.map