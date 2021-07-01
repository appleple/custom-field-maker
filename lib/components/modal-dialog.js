"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var ModalDialog =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ModalDialog, _Component);

  function ModalDialog(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ModalDialog);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModalDialog).call(this, props));
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

      return _react.default.createElement("div", {
        className: (0, _classnames.default)("acms-admin-modal", {
          "in": show
        }),
        id: "converter",
        style: style
      }, _react.default.createElement("div", {
        className: "acms-admin-modal-dialog"
      }, _react.default.createElement("div", {
        className: "acms-admin-modal-content"
      }, _react.default.createElement("div", {
        className: "acms-admin-modal-header"
      }, _react.default.createElement("i", {
        className: "acms-admin-modal-hide acms-admin-icon-delete",
        onClick: this.hideDialog.bind(this)
      }), _react.default.createElement("h3", null, title)), _react.default.createElement("div", {
        className: "acms-admin-modal-body"
      }, _react.default.createElement("div", {
        className: "acms-admin-padding-small clearfix"
      }, children)))));
    }
  }]);
  return ModalDialog;
}(_react.Component);

exports.default = ModalDialog;