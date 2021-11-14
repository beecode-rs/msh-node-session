"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeSessionDao = exports._defaultNameSpaceId = void 0;
const cls_hooked_1 = require("cls-hooked");
exports._defaultNameSpaceId = 'node-session-context-id-89a2af34c0a3f';
class NodeSessionDao {
    constructor(params = {}) {
        const { nameSpaceId = exports._defaultNameSpaceId } = params;
        this._ns = cls_hooked_1.createNamespace(nameSpaceId);
    }
    get NS() {
        return this._ns;
    }
    get(key) {
        this._throwErrorIfInactiveContext();
        return this._ns.get(key);
    }
    set(key, value) {
        this._throwErrorIfInactiveContext();
        this._ns.set(key, value);
    }
    clear(key) {
        this._throwErrorIfInactiveContext();
        this._ns.set(key, undefined);
    }
    createAsync(callback) {
        return new Promise((resolve, reject) => {
            this._ns.run(() => {
                callback().then(resolve).catch(reject);
            });
        });
    }
    _throwErrorIfInactiveContext() {
        if (!this._ns.active)
            throw new Error('No active session found');
    }
}
exports.NodeSessionDao = NodeSessionDao;
//# sourceMappingURL=node-session-dao.js.map