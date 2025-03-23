"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncLocalStorageStrategy = void 0;
var _nodeAsync_hooks = require("node:async_hooks");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AsyncLocalStorageStrategy = exports.AsyncLocalStorageStrategy = /*#__PURE__*/function () {
  function AsyncLocalStorageStrategy() {
    _classCallCheck(this, AsyncLocalStorageStrategy);
    _defineProperty(this, "_storage", new _nodeAsync_hooks.AsyncLocalStorage());
  }
  return _createClass(AsyncLocalStorageStrategy, [{
    key: "get",
    value:
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
    function get(key) {
      var store = this._storage.getStore();
      this._throwErrorIfInactiveContext(store);
      return store.get(key);
    }

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  }, {
    key: "set",
    value: function set(key, value) {
      var store = this._storage.getStore();
      this._throwErrorIfInactiveContext(store);
      store.set(key, value);
    }
  }, {
    key: "clear",
    value: function clear(key) {
      var store = this._storage.getStore();
      this._throwErrorIfInactiveContext(store);
      store["delete"](key);
    }
  }, {
    key: "createSession",
    value: function createSession(callback, options) {
      var _ref = options !== null && options !== void 0 ? options : {},
        _ref$defaultValue = _ref.defaultValue,
        defaultValue = _ref$defaultValue === void 0 ? {} : _ref$defaultValue;
      var store = new Map(Object.entries(defaultValue));
      this._storage.run(store, callback);
    }
  }, {
    key: "_throwErrorIfInactiveContext",
    value: function _throwErrorIfInactiveContext(store) {
      if (!store) {
        throw new Error('No active session found');
      }
    }
  }]);
}();