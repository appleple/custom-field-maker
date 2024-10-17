'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Alert = Alert;
var _react = _interopRequireDefault(require('react'));
function Alert(props) {
  const {
    field: { alert },
    setField,
  } = props;
  const onRemoveAlert = () => {
    setField((prevState) => ({
      ...prevState,
      alert: false,
    }));
  };
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    alert
      ? /*#__PURE__*/ _react.default.createElement(
          'p',
          {
            className: 'acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger',
            style: {
              fontSize: '12px',
            },
          },
          /*#__PURE__*/ _react.default.createElement('span', {
            className: 'acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention',
            'aria-hidden': 'true',
          }),
          '\u30BF\u30A4\u30D7\u3068\u30BF\u30A4\u30C8\u30EB\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5168\u3066\u3092\u5165\u529B\u3057\u306A\u3044\u3068\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3067\u304D\u307E\u305B\u3093\u3002',
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              className: 'js-acms-alert-close acms-admin-alert-icon-after',
              onClick: onRemoveAlert,
            },
            '\xD7'
          )
        )
      : null
  );
}
