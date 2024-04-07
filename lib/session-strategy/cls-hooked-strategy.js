"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._defaultNameSpaceId = exports.ClsHookedStrategy = void 0;
var _clsHooked = require("cls-hooked");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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