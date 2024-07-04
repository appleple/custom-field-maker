"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Label = require("../html/Label");
var _TextInput = require("../html/TextInput");
var _TextareaInput = require("../html/TextareaInput");
var Table = exports.Table = function Table(props) {
  var customfield = props.customfield,
    preview = props.preview;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, preview.jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->', /*#__PURE__*/_react.default.createElement("table", {
    className: (0, _classnames.default)({
      'acms-admin-table-admin-edit': preview.acmscss
    })
  }, customfield.map(function (item, index) {
    switch (item.type) {
      case 'text':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Label.Label, {
            item: item,
            preview: preview
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_TextInput.TextInput, {
            item: item,
            preview: preview
          })));
        }
      case 'textarea':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Label.Label, {
            item: item,
            preview: preview
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_TextareaInput.TextareaInput, {
            item: item,
            preview: preview
          })));
        }
      default:
        {
          return null;
        }
    }
  })), preview.jsValidator && '<!-- </form> -->');
};