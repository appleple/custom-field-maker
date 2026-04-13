"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = (0, _getPrototypeOf2.default)(t); if (r) { var s = (0, _getPrototypeOf2.default)(this).constructor; e = Reflect.construct(o, arguments, s); } else e = o.apply(this, arguments); return (0, _possibleConstructorReturn2.default)(this, e); }; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Notify = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Notify, _Component);
  var _super = _createSuper(Notify);
  function Notify(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Notify);
    _this = _super.call(this, props);
    _this.state = {
      show: false
    };
    return _this;
  }
  (0, _createClass2.default)(Notify, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var _this2 = this;
      var onFinish = this.props.onFinish;
      if (props.show === true) {
        setTimeout(function () {
          _this2.setState({
            active: true
          });
        }, 1);
        setTimeout(function () {
          _this2.setState({
            active: false
          });
        }, 800);
        setTimeout(function () {
          if (onFinish) {
            onFinish();
          }
        }, 1100);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        show = _this$props.show,
        message = _this$props.message;
      var active = this.state.active;
      if (!show) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('customFieldCopied', {
          active: active
        })
      }, message);
    }
  }]);
  return Notify;
}(_react.Component);
exports.default = Notify;