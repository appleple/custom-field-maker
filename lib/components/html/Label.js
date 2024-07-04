"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;
var _react = _interopRequireDefault(require("react"));
var Label = exports.Label = function Label(props) {
  var item = props.item,
    preview = props.preview;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.title, item.tooltip && /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip js-acms-tooltip",
    "data-acms-tooltip": item.tooltip
  }), preview && preview.jsValidator && /*#__PURE__*/_react.default.createElement("label", {
    className: "valid-mark",
    "data-validator": item.name
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "acms-admin-icon acms-admin-icon-checklist"
  })));
};