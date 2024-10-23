"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageResizeOption = ImageResizeOption;
var _react = _interopRequireDefault(require("react"));
function ImageResizeOption(props) {
  const {
    field: {
      resize,
      alt
    },
    setField
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "acms-admin-form-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: () => setField(prevState => ({
      ...prevState,
      resize: !resize
    })),
    defaultChecked: resize,
    id: "resize-checkbox"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "resize-checkbox"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), "\u30D6\u30E9\u30A6\u30B6\u5074\u306E\u30EA\u30B5\u30A4\u30BA\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B")), /*#__PURE__*/_react.default.createElement("p", {
    className: "acms-admin-form-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: () => setField(prevState => ({
      ...prevState,
      alt: !alt
    })),
    defaultChecked: alt,
    id: "alt-checkbox"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "alt-checkbox"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), " alt\u8868\u793A\u7528\u5165\u529B\u6B04\u3092\u4F7F\u7528\u3059\u308B")));
}