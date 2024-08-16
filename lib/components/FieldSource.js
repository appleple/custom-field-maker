'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.FieldSource = FieldSource;
var _react = _interopRequireDefault(require('react'));
var _Section = require('./layouts/Section');
var _TableLayout = require('./layouts/TableLayout');
var _MakerContext = require('../store/MakerContext');
function FieldSource() {
  const {
    state: {
      preview: { tag },
    },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    tag === 'section' ? /*#__PURE__*/ _react.default.createElement(_Section.Section, null) : null,
    tag === 'table' ? /*#__PURE__*/ _react.default.createElement(_TableLayout.TableLayout, null) : null
  );
}
