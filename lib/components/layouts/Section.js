"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = void 0;
var _react = _interopRequireDefault(require("react"));
var _Label = require("../html/Label");
var _TextInput = require("../html/TextInput");
var _TextareaInput = require("../html/TextareaInput");
var _MediaInput = require("../html/MediaInput");
var Section = exports.Section = function Section(props) {
  var customfield = props.customfield,
    preview = props.preview;
  return /*#__PURE__*/_react.default.createElement("section", null, preview.jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->', customfield.length > 0 && customfield.map(function (item, index) {
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
      case 'media':
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
            className: "js-media-field"
          }, /*#__PURE__*/_react.default.createElement(_MediaInput.MediaInput, {
            item: item,
            preview: preview
          })));
        }
      default:
        {
          return null;
        }
    }
  }), preview.jsValidator && '<!-- </form> -->');
};