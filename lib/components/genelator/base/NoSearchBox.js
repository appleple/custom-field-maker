'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.NoSearchBox = NoSearchBox;
var _react = _interopRequireDefault(require('react'));
function NoSearchBox(props) {
  const { noSearch, setField } = props;
  return /*#__PURE__*/ _react.default.createElement(
    'p',
    {
      className: 'acms-admin-form-checkbox',
      style: {
        margin: 0,
      },
    },
    /*#__PURE__*/ _react.default.createElement('input', {
      type: 'checkbox',
      value: noSearch,
      id: 'noSearch-checkbox',
      onChange: () =>
        setField((prevState) => ({
          ...prevState,
          noSearch: !noSearch,
        })),
    }),
    /*#__PURE__*/ _react.default.createElement(
      'label',
      {
        htmlFor: 'noSearch-checkbox',
      },
      /*#__PURE__*/ _react.default.createElement('i', {
        className: 'acms-admin-ico-checkbox',
      }),
      '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u691C\u7D22\u306E\u5BFE\u8C61\u5916\u306B\u3059\u308B'
    )
  );
}
