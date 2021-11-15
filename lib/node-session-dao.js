"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeSessionDao = exports._defaultNameSpaceId = void 0;
const cls_hooked_1 = require("cls-hooked");
exports._defaultNameSpaceId = 'node-session-context-id-89a2af34c0a3f';
class NodeSessionDao {
    constructor(params = {}) {
        const { nameSpaceId = exports._defaultNameSpaceId } = params;
        this._ns = (0, cls_hooked_1.createNamespace)(nameSpaceId);
    }
    get NS() {
        return this._ns;
    }
    get(key) {
        this._throwErrorIfInactiveContext();
        return this.NS.get(key);
    }
    set(key, value) {
        this._throwErrorIfInactiveContext();
        this.NS.set(key, value);
    }
    clear(key) {
        this._throwErrorIfInactiveContext();
        this.NS.set(key, undefined);
    }
    _throwErrorIfInactiveContext() {
        if (!this.NS.active)
            throw new Error('No active session found');
    }
}
exports.NodeSessionDao = NodeSessionDao;
//# sourceMappingURL=node-session-dao.js.map