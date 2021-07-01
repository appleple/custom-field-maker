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

var Notify =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Notify, _Component);

  function Notify(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Notify);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Notify).call(this, props));
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

      return _react.default.createElement("div", {
        className: (0, _classnames.default)('customFieldCopied', {
          active: active
        })
      }, message);
    }
  }]);
  return Notify;
}(_react.Component);

exports.default = Notify;