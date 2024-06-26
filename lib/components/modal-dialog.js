"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ModalDialog = exports.default = /*#__PURE__*/function (_Component) {
  function ModalDialog(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ModalDialog);
    _this = _callSuper(this, ModalDialog, [props]);
    _this.state = {
      show: false
    };
    return _this;
  }
  (0, _inherits2.default)(ModalDialog, _Component);
  return (0, _createClass2.default)(ModalDialog, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var _this2 = this;
      if (props.open) {
        setTimeout(function () {
          _this2.setState({
            show: true
          });
        }, 1);
      }
    }
  }, {
    key: "hideDialog",
    value: function hideDialog() {
      var onClose = this.props.onClose;
      this.setState({
        show: false
      });
      if (onClose) {
        setTimeout(function () {
          onClose();
        }, 300);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        title = _this$props.title,
        open = _this$props.open;
      var show = this.state.show;
      var style = {};
      if (open) {
        style.display = 'block';
      } else {
        style.display = 'none';
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)("acms-admin-modal", {
          "in": show
        }),
        id: "converter",
        style: style
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-modal-dialog"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-modal-content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-modal-header"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-modal-hide acms-admin-icon-delete",
        onClick: this.hideDialog.bind(this)
      }), /*#__PURE__*/_react.default.createElement("h3", null, title)), /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-modal-body"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-padding-small clearfix"
      }, children)))));
    }
  }]);
}(_react.Component);