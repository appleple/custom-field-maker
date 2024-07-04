"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldGroupSource = void 0;
var _react = _interopRequireDefault(require("react"));
var _GroupSection = require("./layouts/GroupSection");
var _GroupTable = require("./layouts/GroupTable");
var FieldGroupSource = exports.FieldGroupSource = function FieldGroupSource(_ref) {
  var fieldgroup = _ref.fieldgroup,
    preview = _ref.preview;
  if (!fieldgroup) return null;
  return /*#__PURE__*/_react.default.createElement("div", null, preview.tag === 'section' ? /*#__PURE__*/_react.default.createElement(_GroupSection.GroupSection, {
    fieldgroup: fieldgroup,
    preview: preview
  }) : null, preview.tag === 'table' ? /*#__PURE__*/_react.default.createElement(_GroupTable.GroupTable, {
    fieldgroup: fieldgroup,
    preview: preview
  }) : null);
};