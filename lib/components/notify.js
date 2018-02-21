'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notify = function (_Component) {
  (0, _inherits3.default)(Notify, _Component);

  function Notify(props) {
    (0, _classCallCheck3.default)(this, Notify);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Notify.__proto__ || (0, _getPrototypeOf2.default)(Notify)).call(this, props));

    _this.state = {
      show: false
    };
    return _this;
  }

  (0, _createClass3.default)(Notify, [{
    key: 'componentWillReceiveProps',
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
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          message = _props.message;
      var active = this.state.active;

      if (!show) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('customFieldCopied', { active: active }) },
        message
      );
    }
  }]);
  return Notify;
}(_react.Component);

exports.default = Notify;