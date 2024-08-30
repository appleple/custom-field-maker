'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.UnitSource = UnitSource;
var _react = _interopRequireDefault(require('react'));
var _UnitSection = require('./layouts/UnitSection');
var _UnitTableLayout = require('./layouts/UnitTableLayout');
var _MakerContext = require('../store/MakerContext');
function UnitSource() {
  const {
    preview: { tag },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    tag === 'section' ? /*#__PURE__*/ _react.default.createElement(_UnitSection.UnitSection, null) : null,
    tag === 'table' ? /*#__PURE__*/ _react.default.createElement(_UnitTableLayout.UnitTableLayout, null) : null
  );
}
