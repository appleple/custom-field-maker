"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviewNavigator = void 0;
var _react = _interopRequireDefault(require("react"));
var _MakerContext = require("../../store/MakerContext");
var PreviewNavigator = exports.PreviewNavigator = function PreviewNavigator() {
  var _useMakerContext = (0, _MakerContext.useMakerContext)(),
    preview = _useMakerContext.preview,
    setTag = _useMakerContext.setTag,
    setAcmscss = _useMakerContext.setAcmscss,
    setJsValidator = _useMakerContext.setJsValidator;
  var updateTag = function updateTag(tag) {
    setTag(tag);
  };
  var onAcmsCss = function onAcmsCss() {
    setAcmscss(!preview.acmscss);
  };
  var onJsValidator = function onJsValidator() {
    setJsValidator(!preview.jsValidator);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-checkbox",
    style: {
      marginTop: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: onAcmsCss,
    checked: preview.acmscss,
    id: "acmscss-checkbox"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "acmscss-checkbox"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), "acms-admin.css\u3092\u4F7F\u7528\u3059\u308B")), (preview.mode === 'normal' || preview.mode === 'group') && /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-checkbox",
    style: {
      marginTop: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: onJsValidator,
    checked: preview.jsValidator,
    id: "jsvalidator-checkbox"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "jsvalidator-checkbox"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), "JavaScript\u306B\u3088\u308B\u30D0\u30EA\u30C7\u30FC\u30C8\u3092\u4F7F\u7528\u3059\u308B")), /*#__PURE__*/_react.default.createElement("select", {
    id: "tag",
    onChange: function onChange(e) {
      return updateTag(e.target.value);
    },
    className: "acms-admin-form-width-quarter"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "section"
  }, "--"), /*#__PURE__*/_react.default.createElement("option", {
    value: "table"
  }, "table")));
};