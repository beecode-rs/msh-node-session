"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClsHookedStrategy = exports._defaultNameSpaceId = void 0;
const cls_hooked_1 = require("cls-hooked");
exports._defaultNameSpaceId = 'node-session-context-id-89a2af34c0a3f';
class ClsHookedStrategy {
    constructor(params) {
        const { nameSpaceId = exports._defaultNameSpaceId } = params !== null && params !== void 0 ? params : {};
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
    createSession(callback, options) {
        const { defaultValue = {} } = options !== null && options !== void 0 ? options : {};
        this.NS.run(() => {
            Object.entries(defaultValue).map(([key, value]) => this.set(key, value));
            callback();
        });
    }
    _throwErrorIfInactiveContext() {
        if (!this.NS.active)
            throw new Error('No active session found');
    }
}
exports.ClsHookedStrategy = ClsHookedStrategy;
//# sourceMappingURL=cls-hooked-strategy.js.map