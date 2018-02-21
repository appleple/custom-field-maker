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

var ModalDialog = function (_Component) {
  (0, _inherits3.default)(ModalDialog, _Component);

  function ModalDialog(props) {
    (0, _classCallCheck3.default)(this, ModalDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ModalDialog.__proto__ || (0, _getPrototypeOf2.default)(ModalDialog)).call(this, props));

    _this.state = {
      show: false
    };
    return _this;
  }

  (0, _createClass3.default)(ModalDialog, [{
    key: 'componentWillReceiveProps',
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
    key: 'hideDialog',
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
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          open = _props.open;
      var show = this.state.show;

      var style = {};
      if (open) {
        style.display = 'block';
      } else {
        style.display = 'none';
      }

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)("acms-admin-modal", { "in": show }), id: 'converter', style: style },
        _react2.default.createElement(
          'div',
          { className: 'acms-admin-modal-dialog' },
          _react2.default.createElement(
            'div',
            { className: 'acms-admin-modal-content' },
            _react2.default.createElement(
              'div',
              { className: 'acms-admin-modal-header' },
              _react2.default.createElement('i', { className: 'acms-admin-modal-hide acms-admin-icon-delete', onClick: this.hideDialog.bind(this) }),
              _react2.default.createElement(
                'h3',
                null,
                title
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'acms-admin-modal-body' },
              _react2.default.createElement(
                'div',
                { className: 'acms-admin-padding-small clearfix' },
                children
              )
            )
          )
        )
      );
    }
  }]);
  return ModalDialog;
}(_react.Component);

exports.default = ModalDialog;