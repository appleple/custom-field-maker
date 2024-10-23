"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageOption = ImageOption;
var _react = _interopRequireDefault(require("react"));
var _reactTooltip = _interopRequireDefault(require("react-tooltip"));
function ImageOption(props) {
  const {
    setField
  } = props;
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableImg"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "acms-admin-table-left"
  }, "\u753B\u50CF\u30B5\u30A4\u30BA", /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip",
    "data-tip": true,
    "data-for": "image-size-tip"
  }), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    id: "image-size-tip",
    place: "top",
    type: "dark",
    effect: "solid",
    className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u901A\u5E38\u753B\u50CF\u306E\u753B\u50CF\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059"))), /*#__PURE__*/_react.default.createElement("th", {
    className: "acms-admin-table-left"
  }, "large\u753B\u50CF\u751F\u6210", /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip",
    "data-tip": true,
    "data-for": "image-large-size-tip"
  }), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    id: "image-size-tip",
    place: "top",
    type: "dark",
    effect: "solid",
    className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u901A\u5E38\u753B\u50CF\u3088\u308A\u3082\u5927\u304D\u3044\u753B\u50CF\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002"))), /*#__PURE__*/_react.default.createElement("th", {
    className: "acms-admin-table-left"
  }, "tiny\u753B\u50CF\u751F\u6210", /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip",
    "data-tip": true,
    "data-for": "image-tiny-size-tip"
  }), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    id: "image-tiny-size-tip",
    place: "top",
    type: "dark",
    effect: "solid",
    className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u901A\u5E38\u753B\u50CF\u3088\u308A\u3082\u5C0F\u3055\u3044\u753B\u50CF\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002"))), /*#__PURE__*/_react.default.createElement("th", {
    className: "acms-admin-table-left"
  }, "square\u753B\u50CF\u751F\u6210", /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip",
    "data-tip": true,
    "data-for": "image-square-size-tip"
  }), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    id: "image-tiny-size-tip",
    place: "top",
    type: "dark",
    effect: "solid",
    className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u901A\u5E38\u753B\u50CF\u3092\u6307\u5B9A\u3057\u305F\u30B5\u30A4\u30BA\u3067\u4E2D\u592E\u304B\u3089\u6B63\u65B9\u5F62\u306B\u30C8\u30EA\u30DF\u30F3\u30B0\u3057\u3066\u751F\u6210\u3057\u307E\u3059\u3002")))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-form-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/_react.default.createElement("select", {
    name: "normal",
    onChange: e => {
      const value = e.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        normal: value
      }));
    },
    className: "acms-admin-margin-right-small"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "size"
  }, "\u9577\u8FBA"), /*#__PURE__*/_react.default.createElement("option", {
    value: "width"
  }, "\u5E45"), /*#__PURE__*/_react.default.createElement("option", {
    value: "height"
  }, "\u9AD8\u3055")), /*#__PURE__*/_react.default.createElement("span", {
    className: "input-append"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    autoComplete: "off",
    name: "normalSize",
    onInput: e => {
      const value = e.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        normalSize: value
      }));
    },
    className: "customFieldSizeInput",
    placeholder: "\u4F8B\uFF09200px"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "add-on"
  }, " px"))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-form-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/_react.default.createElement("select", {
    name: "large",
    onChange: e => {
      const value = e.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        large: value
      }));
    },
    className: "acms-admin-margin-right-small"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "\u4F5C\u3089\u306A\u3044"), /*#__PURE__*/_react.default.createElement("option", {
    value: "largeWidth"
  }, "width"), /*#__PURE__*/_react.default.createElement("option", {
    value: "largeHeight"
  }, "height")), /*#__PURE__*/_react.default.createElement("span", {
    className: "input-append"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    autoComplete: "off",
    name: "largeSize",
    onInput: e => {
      const value = e.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        largeSize: value
      }));
    },
    className: "customFieldSizeInput",
    placeholder: "\u4F8B\uFF09400px"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "add-on"
  }, " px"))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-form-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/_react.default.createElement("select", {
    name: "tiny",
    onChange: e => {
      const value = e.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        tiny: value
      }));
    },
    className: "acms-admin-margin-right-small"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "\u4F5C\u3089\u306A\u3044"), /*#__PURE__*/_react.default.createElement("option", {
    value: "tinyWidth"
  }, "width"), /*#__PURE__*/_react.default.createElement("option", {
    value: "tinyHeight"
  }, "height")), /*#__PURE__*/_react.default.createElement("span", {
    className: "input-append"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    autoComplete: "off",
    name: "tinySize",
    onInput: e => {
      const value = e.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        tinySize: value
      }));
    },
    className: "customFieldSizeInput",
    placeholder: "\u4F8B\uFF09100px"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "add-on"
  }, " px"))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-form-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/_react.default.createElement("select", {
    name: "square",
    onChange: e => {
      const value = e.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        square: value
      }));
    },
    className: "acms-admin-margin-right-small"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "\u4F5C\u3089\u306A\u3044"), /*#__PURE__*/_react.default.createElement("option", {
    value: "squareWidth"
  }, "width")), /*#__PURE__*/_react.default.createElement("span", {
    className: "input-append"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    autoComplete: "off",
    name: "squareSize",
    onInput: e => {
      const value = e.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        squareSize: value
      }));
    },
    className: "customFieldSizeInput",
    placeholder: "\u4F8B\uFF09250px"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "add-on"
  }, " px"))))))));
}