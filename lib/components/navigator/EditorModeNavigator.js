"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorModeNavigator = void 0;
var _react = _interopRequireDefault(require("react"));
var _MakerContext = require("../../store/MakerContext");
var EditorModeNavigator = exports.EditorModeNavigator = function EditorModeNavigator() {
  var _useMakerContext = (0, _MakerContext.useMakerContext)(),
    preview = _useMakerContext.preview,
    setMode = _useMakerContext.setMode;
  var updateMode = function updateMode(e) {
    var mode = e.target.value;
    setMode(mode);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    value: "normal",
    id: "input-radio-mode-normal",
    checked: preview.mode === 'normal',
    onChange: updateMode
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-radio-mode-normal"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9")), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    value: "group",
    id: "input-radio-mode-group",
    checked: preview.mode === 'group',
    onChange: updateMode
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-radio-mode-group"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    value: "unit",
    id: "input-radio-mode-unit",
    checked: preview.mode === 'unit',
    onChange: updateMode
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-radio-mode-unit"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8")), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    value: "unit-group",
    id: "input-radio-mode-unit-group",
    checked: preview.mode === 'unit-group',
    onChange: updateMode
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-radio-mode-unit-group"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8\uFF08\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\uFF09")));
};