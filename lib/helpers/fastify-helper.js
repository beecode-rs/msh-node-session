"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fastifyHelperFactory = exports.FastifyHelper = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
class FastifyHelper {
    constructor(params) {
        this.validHooks = [
            'onRequest',
            'preParsing',
            'preValidation',
            'preHandler',
            'preSerialization',
            'onError',
            'onSend',
            'onResponse',
        ];
        const { sessionStrategy } = params;
        this._sessionStrategy = sessionStrategy;
    }
    _plugin(fastify, opts, next) {
        const defaults = opts.defaults || {};
        const hook = opts.hook || 'onRequest';
        if (!this.validHooks.includes(hook)) {
            fastify.log.error(`${hook} is not a valid fastify hook. Please use one of the following ${this.validHooks}`);
        }
        fastify.addHook('onRequest', (_req, _res, done) => {
            this._sessionStrategy.createSession(() => {
                done();
            }, defaults);
        });
        next();
    }
    beecodeSessionContextPluginFactory() {
        return (0, fastify_plugin_1.default)(this._plugin.bind(this), {
            fastify: '3.x',
            name: 'beecode-session-context',
        });
    }
}
exports.FastifyHelper = FastifyHelper;
const fastifyHelperFactory = (params) => {
    return new FastifyHelper(params);
};
exports.fastifyHelperFactory = fastifyHelperFactory;
//# sourceMappingURL=fastify-helper.js.map