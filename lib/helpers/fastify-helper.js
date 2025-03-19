"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fastifyHelperFactory = exports.FastifyHelper = void 0;
var _fastifyPlugin = _interopRequireDefault(require("fastify-plugin"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
        fastify.log.error("".concat(hook, " is not a valid fastify hook. Please use one of the following ").concat(this.validHooks.join(', ')));
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