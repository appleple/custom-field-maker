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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ModalDialog = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ModalDialog, _Component);
  var _super = _createSuper(ModalDialog);
  function ModalDialog(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ModalDialog);
    _this = _super.call(this, props);
    _this.state = {
      show: false
    };
    return _this;
  }
  (0, _createClass2.default)(ModalDialog, [{
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
  return ModalDialog;
}(_react.Component);
exports.default = ModalDialog;