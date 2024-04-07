"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fastifyHelperFactory = exports.FastifyHelper = void 0;
var _fastifyPlugin = _interopRequireDefault(require("fastify-plugin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FastifyHelper = exports.FastifyHelper = /*#__PURE__*/function () {
  function FastifyHelper(params) {
    _classCallCheck(this, FastifyHelper);
    _defineProperty(this, "validHooks", ['onRequest', 'preParsing', 'preValidation', 'preHandler', 'preSerialization', 'onError', 'onSend', 'onResponse']);
    var sessionStrategy = params.sessionStrategy;
    this._sessionStrategy = sessionStrategy;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return _createClass(FastifyHelper, [{
    key: "_plugin",
    value: function _plugin(fastify, opts, next) {
      var _this = this;
      var defaults = opts.defaults || {};
      var hook = opts.hook || 'onRequest';
      if (!this.validHooks.includes(hook)) {
        fastify.log.error("".concat(hook, " is not a valid fastify hook. Please use one of the following ").concat(this.validHooks));
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fastify.addHook('onRequest', function (_req, _res, done) {
        _this._sessionStrategy.createSession(function () {
          done();
        }, defaults);
      });
      next();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "beecodeSessionContextPluginFactory",
    value: function beecodeSessionContextPluginFactory() {
      return (0, _fastifyPlugin["default"])(this._plugin.bind(this), {
        fastify: '3.x',
        name: 'beecode-session-context'
      });
    }
  }]);
}();
var fastifyHelperFactory = exports.fastifyHelperFactory = function fastifyHelperFactory(params) {
  return new FastifyHelper(params);
};