'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.GroupAlert = GroupAlert;
var _react = _interopRequireDefault(require('react'));
function GroupAlert(props) {
  const {
    field: { groupAlert },
    setField,
  } = props;
  const closeAlert = () => {
    setField((prevState) => ({
      ...prevState,
      groupAlert: false,
    }));
  };
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    groupAlert
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
          '\u30B0\u30EB\u30FC\u30D7\u540D\u3092\u5165\u529B\u3057\u306A\u3044\u3068\u30B0\u30EB\u30FC\u30D7\u3092\u751F\u6210\u3067\u304D\u307E\u305B\u3093\u3002',
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              className: 'js-acms-alert-close acms-admin-alert-icon-after',
              onClick: closeAlert,
            },
            '\xD7'
          )
        )
      : null
  );
}
