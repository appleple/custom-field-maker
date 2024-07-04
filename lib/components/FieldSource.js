"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSource = void 0;
var _react = _interopRequireDefault(require("react"));
var _Section = require("./layouts/Section");
var _Table = require("./layouts/Table");
var FieldSource = exports.FieldSource = function FieldSource(_ref) {
  var customfield = _ref.customfield,
    preview = _ref.preview;
  if (!customfield) return null;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, preview.tag === 'section' && /*#__PURE__*/_react.default.createElement(_Section.Section, {
    customfield: customfield,
    preview: preview
  }), preview.tag === 'table' && /*#__PURE__*/_react.default.createElement(_Table.Table, {
    customfield: customfield,
    preview: preview
  }));
};