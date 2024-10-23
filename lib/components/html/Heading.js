"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = Heading;
var _react = _interopRequireDefault(require("react"));
var _MakerContext = require("../../store/MakerContext");
function Heading(props) {
  const {
    item
  } = props;
  const {
    preview: {
      jsValidator
    }
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", jsValidator && {
    'data-validator': item.name
  }, item.title), item.tooltip && /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip js-acms-tooltip-hover",
    "data-acms-tooltip": item.tooltip
  }));
}