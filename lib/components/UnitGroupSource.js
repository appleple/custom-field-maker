'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.UnitGroupSource = UnitGroupSource;
var _react = _interopRequireDefault(require('react'));
var _UnitGroupSection = require('./layouts/UnitGroupSection');
var _UnitGroupTableLayout = require('./layouts/UnitGroupTableLayout');
var _MakerContext = require('../store/MakerContext');
function UnitGroupSource() {
  const {
    preview: { tag },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    tag === 'section' ? /*#__PURE__*/ _react.default.createElement(_UnitGroupSection.UnitGroupSection, null) : null,
    tag === 'table'
      ? /*#__PURE__*/ _react.default.createElement(_UnitGroupTableLayout.UnitGroupTableLayout, null)
      : null
  );
}
