'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.DuplicateAlert = DuplicateAlert;
var _react = _interopRequireDefault(require('react'));
function DuplicateAlert(props) {
  const {
    field: { duplicatedField },
    setField,
  } = props;
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    duplicatedField
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
          '\u30B0\u30EB\u30FC\u30D7\u540D\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u540C\u3058\u5024\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002',
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              className: 'js-acms-alert-close acms-admin-alert-icon-after',
              onClick: () =>
                setField((prevState) => ({
                  ...prevState,
                  duplicatedField: false,
                })),
            },
            '\xD7'
          )
        )
      : null
  );
}
