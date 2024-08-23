'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.FieldConfirmSource = FieldConfirmSource;
var _react = _interopRequireDefault(require('react'));
var _TableLayoutConfirm = require('./cofirmLayouts/TableLayoutConfirm');
var _MakerContext = require('../store/MakerContext');
function FieldConfirmSource() {
  const {
    state: {
      preview: { tag },
    },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    tag === 'section' ? /*#__PURE__*/ _react.default.createElement(_TableLayoutConfirm.TableLayoutConfirm, null) : null,
    tag === 'table' ? /*#__PURE__*/ _react.default.createElement(_TableLayoutConfirm.TableLayoutConfirm, null) : null
  );
}
