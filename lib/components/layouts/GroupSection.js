"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupSection = void 0;
var _react = _interopRequireDefault(require("react"));
var _Label = require("../html/Label");
var _TextInput = require("../html/TextInput");
var _TextareaInput = require("../html/TextareaInput");
var _classnames = _interopRequireDefault(require("classnames"));
var GroupSection = exports.GroupSection = function GroupSection(props) {
  var fieldgroup = props.fieldgroup,
    preview = props.preview;
  return /*#__PURE__*/_react.default.createElement("section", null, fieldgroup.title && /*#__PURE__*/_react.default.createElement("h2", {
    className: (0, _classnames.default)({
      'acms-admin-admin-title2': preview.acmscss
    })
  }, fieldgroup.title), fieldgroup.name && /*#__PURE__*/_react.default.createElement("div", null, fieldgroup.items.map(function (item, index) {
    switch (item.type) {
      case 'text':
        {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, /*#__PURE__*/_react.default.createElement(_Label.Label, {
            item: item,
            preview: preview
          })), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, /*#__PURE__*/_react.default.createElement(_TextInput.TextInput, {
            item: item,
            preview: preview
          })));
        }
      case 'textarea':
        {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, /*#__PURE__*/_react.default.createElement(_Label.Label, {
            item: item,
            preview: preview
          })), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, /*#__PURE__*/_react.default.createElement(_TextareaInput.TextareaInput, {
            item: item,
            preview: preview
          })));
        }
      default:
        {
          return null;
        }
    }
  })));
};