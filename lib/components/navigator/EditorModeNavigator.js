"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorModeNavigator = EditorModeNavigator;
var _react = _interopRequireDefault(require("react"));
var _MakerContext = require("../../store/MakerContext");
function EditorModeNavigator() {
  const {
    preview: {
      mode
    },
    setMode
  } = (0, _MakerContext.useMakerContext)();
  const updateMode = e => {
    const newMode = e.target.value;
    setMode(newMode);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    value: "customfield",
    id: "input-radio-mode-normal",
    checked: mode === 'customfield',
    onChange: updateMode
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-radio-mode-normal"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9")), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    value: "fieldgroup",
    id: "input-radio-mode-group",
    checked: mode === 'fieldgroup',
    onChange: updateMode
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-radio-mode-group"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    value: "customunit",
    id: "input-radio-mode-unit",
    checked: mode === 'customunit',
    onChange: updateMode
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-radio-mode-unit"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8")), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    value: "unitgroup",
    id: "input-radio-mode-unit-group",
    checked: mode === 'unitgroup',
    onChange: updateMode
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-radio-mode-unit-group"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8\uFF08\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\uFF09")));
}