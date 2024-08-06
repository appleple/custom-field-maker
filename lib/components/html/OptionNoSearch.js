'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.OptionNoSearch = OptionNoSearch;
var _react = _interopRequireDefault(require('react'));
function OptionNoSearch(props) {
  const { noSearch, name } = props;
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    noSearch
      ? /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(name, ':search'),
          value: '0',
        })
      : null
  );
}
