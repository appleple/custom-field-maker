"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviewModeNavigator = void 0;
var _react = _interopRequireDefault(require("react"));
var _MakerContext = require("../../store/MakerContext");
var PreviewModeNavigator = exports.PreviewModeNavigator = function PreviewModeNavigator() {
  var _useMakerContext = (0, _MakerContext.useMakerContext)(),
    setEditMode = _useMakerContext.setEditMode;
  var updateMode = function updateMode(editMode) {
    setEditMode(editMode);
  };
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "customFieldTabs"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#source"
    // className={classnames({ customFieldTabActive: editMode === 'source' })}
    ,
    onClick: function onClick() {
      return updateMode('source');
    }
  }, "\u5165\u529B\u7528\u30BD\u30FC\u30B9")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#preview"
    // className={classnames({ customFieldTabActive: editMode === 'preview' })}
    ,
    onClick: function onClick() {
      return updateMode('preview');
    }
  }, "\u30D7\u30EC\u30D3\u30E5\u30FC")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#confirm"
    // className={classnames({ customFieldTabActive: editMode === 'confirm' })}
    ,
    onClick: function onClick() {
      return updateMode('confirm');
    }
  }, "\u51FA\u529B\u7528\u30BD\u30FC\u30B9")));
};