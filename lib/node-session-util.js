"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeSessionUtil = void 0;
var _clsHookedStrategy = require("./session-strategy/cls-hooked-strategy");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NodeSessionUtil = exports.NodeSessionUtil = /*#__PURE__*/function () {
  function NodeSessionUtil(props) {
    _classCallCheck(this, NodeSessionUtil);
    var _ref = props !== null && props !== void 0 ? props : {},
      _ref$sessionStrategy = _ref.sessionStrategy,
      sessionStrategy = _ref$sessionStrategy === void 0 ? new _clsHookedStrategy.ClsHookedStrategy() : _ref$sessionStrategy;
    this._strategy = sessionStrategy;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return _createClass(NodeSessionUtil, [{
    key: "createAsyncSession",
    value: function createAsyncSession(callback) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this._strategy.createSession(function () {
          callback().then(resolve)["catch"](reject);
        });
      });
    }
  }, {
    key: "createSession",
    value: function createSession(callback) {
      this._strategy.createSession(callback);
    }
  }]);
}();