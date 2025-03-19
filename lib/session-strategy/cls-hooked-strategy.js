"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._defaultNameSpaceId = exports.ClsHookedStrategy = void 0;
var _clsHooked = require("cls-hooked");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _defaultNameSpaceId = exports._defaultNameSpaceId = 'node-session-context-id-89a2af34c0a3f';
var ClsHookedStrategy = exports.ClsHookedStrategy = /*#__PURE__*/function () {
  function ClsHookedStrategy(params) {
    _classCallCheck(this, ClsHookedStrategy);
    var _ref = params !== null && params !== void 0 ? params : {},
      _ref$nameSpaceId = _ref.nameSpaceId,
      nameSpaceId = _ref$nameSpaceId === void 0 ? _defaultNameSpaceId : _ref$nameSpaceId;
    this._ns = (0, _clsHooked.createNamespace)(nameSpaceId);
  }
  return _createClass(ClsHookedStrategy, [{
    key: "NS",
    get:
    // eslint-disable-next-line @typescript-eslint/naming-convention
    function get() {
      return this._ns;
    }
  }, {
    key: "get",
    value: function get(key) {
      this._throwErrorIfInactiveContext();
      return this.NS.get(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this._throwErrorIfInactiveContext();
      this.NS.set(key, value);
    }
  }, {
    key: "clear",
    value: function clear(key) {
      this._throwErrorIfInactiveContext();
      this.NS.set(key, undefined);
    }
  }, {
    key: "createSession",
    value: function createSession(callback, options) {
      var _this = this;
      var _ref2 = options !== null && options !== void 0 ? options : {},
        _ref2$defaultValue = _ref2.defaultValue,
        defaultValue = _ref2$defaultValue === void 0 ? {} : _ref2$defaultValue;
      this.NS.run(function () {
        Object.entries(defaultValue).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];
          return _this.set(key, value);
        });
        callback();
      });
    }
  }, {
    key: "_throwErrorIfInactiveContext",
    value: function _throwErrorIfInactiveContext() {
      if (!this.NS.active) {
        throw new Error('No active session found');
      }
    }
  }]);
}();