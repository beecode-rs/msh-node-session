"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastAlsStrategy = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const fast_als_1 = __importDefault(require("fast-als"));
class FastAlsStrategy {
    clear(key) {
        fast_als_1.default.set(key, undefined);
    }
    createSession(callback, options) {
        const { defaultValue = {} } = options !== null && options !== void 0 ? options : {};
        fast_als_1.default.runWith(defaultValue, () => {
            callback();
        });
    }
    get(key) {
        return fast_als_1.default.get(key);
    }
    set(key, value) {
        fast_als_1.default.set(key, value);
    }
}
exports.FastAlsStrategy = FastAlsStrategy;
//# sourceMappingURL=fast-als-strategy.js.map