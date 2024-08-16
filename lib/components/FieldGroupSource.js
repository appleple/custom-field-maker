'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.FieldGroupSource = FieldGroupSource;
var _react = _interopRequireDefault(require('react'));
var _GroupSection = require('./layouts/GroupSection');
var _GroupTableLayout = require('./layouts/GroupTableLayout');
var _MakerContext = require('../store/MakerContext');
function FieldGroupSource() {
  const {
    preview: { tag },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    tag === 'section' ? /*#__PURE__*/ _react.default.createElement(_GroupSection.GroupSection, null) : null,
    tag === 'table' ? /*#__PURE__*/ _react.default.createElement(_GroupTableLayout.GroupTableLayout, null) : null
  );
}
