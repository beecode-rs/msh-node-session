"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeSessionDao = exports._nsid = void 0;
const cls_hooked_1 = require("cls-hooked");
exports._nsid = 'node-session-context-id-89a2af34c0a3f';
exports.nodeSessionDao = {
    _ns: cls_hooked_1.createNamespace(exports._nsid),
    _throwErrorIfInactiveContext: () => {
        if (!exports.nodeSessionDao._ns || !exports.nodeSessionDao._ns.active)
            throw new Error('No active session found');
    },
    get: (key) => {
        exports.nodeSessionDao._throwErrorIfInactiveContext();
        return exports.nodeSessionDao._ns.get(key);
    },
    set: (key, value) => {
        exports.nodeSessionDao._throwErrorIfInactiveContext();
        exports.nodeSessionDao._ns.set(key, value);
    },
    clear: (key) => {
        exports.nodeSessionDao._throwErrorIfInactiveContext();
        exports.nodeSessionDao._ns.set(key, undefined);
    },
    createAsync: (callback) => {
        return new Promise((resolve, reject) => {
            exports.nodeSessionDao._ns.run(() => {
                callback().then(resolve).catch(reject);
            });
        });
    },
};
//# sourceMappingURL=node-session-dao.js.map