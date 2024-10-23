"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichEditorOption = RichEditorOption;
var _react = _interopRequireDefault(require("react"));
function RichEditorOption(props) {
  const {
    field: {
      useExpand,
      startHeadingLevel,
      endHeadingLevel
    },
    setField
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "acms-admin-form-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: () => setField(prevState => ({
      ...prevState,
      useExpand: !useExpand
    })),
    defaultChecked: useExpand,
    id: "expand-checkbox"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "expand-checkbox"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), " \u30EA\u30C3\u30C1\u30A8\u30C7\u30A3\u30BF\u30FC\u3092\u62E1\u5927\u8868\u793A\u3059\u308B")), /*#__PURE__*/_react.default.createElement("div", null, "\u958B\u59CB\u898B\u51FA\u3057\u30EC\u30D9\u30EB", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '5px',
      height: '1px'
    }
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    defaultValue: startHeadingLevel,
    onInput: e => {
      const value = e.target.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        startHeadingLevel: value
      }));
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '15px',
      height: '1px'
    }
  }), "\u7D42\u4E86\u898B\u51FA\u3057\u30EC\u30D9\u30EB", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '5px',
      height: '1px'
    }
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    defaultValue: endHeadingLevel,
    onInput: e => {
      const value = e.target.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        endHeadingLevel: value
      }));
    }
  })));
}