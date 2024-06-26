"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FastAlsStrategy = void 0;
var _fastAls = _interopRequireDefault(require("fast-als"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
var FastAlsStrategy = exports.FastAlsStrategy = /*#__PURE__*/function () {
  function FastAlsStrategy() {
    _classCallCheck(this, FastAlsStrategy);
  }
  return _createClass(FastAlsStrategy, [{
    key: "clear",
    value: function clear(key) {
      _fastAls["default"].set(key, undefined);
    }
  }, {
    key: "createSession",
    value: function createSession(callback, options) {
      var _ref = options !== null && options !== void 0 ? options : {},
        _ref$defaultValue = _ref.defaultValue,
        defaultValue = _ref$defaultValue === void 0 ? {} : _ref$defaultValue;
      _fastAls["default"].runWith(defaultValue, function () {
        callback();
      });
    }
  }, {
    key: "get",
    value: function get(key) {
      return _fastAls["default"].get(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      _fastAls["default"].set(key, value);
    }
  }]);
}();