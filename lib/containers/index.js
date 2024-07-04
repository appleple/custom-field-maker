"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MakerContext = require("../store/MakerContext");
var _EditorModeNavigator = require("../components/navigator/EditorModeNavigator");
var _PreviewModeNavigator = require("../components/navigator/PreviewModeNavigator");
var _PreviewNavigator = require("../components/navigator/PreviewNavigator");
var _Field = _interopRequireDefault(require("../components/genelator/Field"));
var _FieldGroup = _interopRequireDefault(require("../components/genelator/FieldGroup"));
var _Unit = _interopRequireDefault(require("../components/genelator/Unit"));
var _UnitGroup = _interopRequireDefault(require("../components/genelator/UnitGroup"));
var _FieldSource = require("../components/FieldSource");
var _FieldGroupSource = require("../components/FieldGroupSource");
var _Highlighter = require("../components/Highlighter");
function CustomFieldMaker() {
  var _useMakerContext = (0, _MakerContext.useMakerContext)(),
    customfield = _useMakerContext.customfield,
    fieldgroup = _useMakerContext.fieldgroup,
    customunit = _useMakerContext.customunit,
    unitgroup = _useMakerContext.unitgroup,
    preview = _useMakerContext.preview;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_EditorModeNavigator.EditorModeNavigator, null), preview.mode === 'normal' && /*#__PURE__*/_react.default.createElement(_Field.default, null), preview.mode === 'group' && /*#__PURE__*/_react.default.createElement(_FieldGroup.default, null), preview.mode === 'unit' && /*#__PURE__*/_react.default.createElement(_Unit.default, null), preview.mode === 'unit-group' && /*#__PURE__*/_react.default.createElement(_UnitGroup.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-tabs"
  }, /*#__PURE__*/_react.default.createElement(_PreviewModeNavigator.PreviewModeNavigator, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-tabs-panel"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: '#F1F1F1',
      padding: '20px 15px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "clearfix"
  }, /*#__PURE__*/_react.default.createElement(_PreviewNavigator.PreviewNavigator, null), preview.editMode === 'source' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Highlighter.Highlighter, null, /*#__PURE__*/_react.default.createElement("p", null, "Highlighter"), preview.mode === 'normal' && /*#__PURE__*/_react.default.createElement(_FieldSource.FieldSource, {
    customfield: customfield,
    preview: preview
  }), preview.mode === 'unit' && /*#__PURE__*/_react.default.createElement(_FieldSource.FieldSource, {
    customfield: customunit,
    preview: preview
  }), preview.mode === 'group' && /*#__PURE__*/_react.default.createElement(_FieldGroupSource.FieldGroupSource, {
    fieldgroup: fieldgroup,
    preview: preview
  }), preview.mode === 'unit-group' && /*#__PURE__*/_react.default.createElement(_FieldGroupSource.FieldGroupSource, {
    fieldgroup: unitgroup,
    preview: preview
  }))), preview.editMode === 'preview' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, "Preview"), preview.mode === 'normal' && /*#__PURE__*/_react.default.createElement(_FieldSource.FieldSource, {
    customfield: customfield,
    preview: preview
  }), preview.mode === 'group' && /*#__PURE__*/_react.default.createElement(_FieldGroupSource.FieldGroupSource, {
    fieldgroup: fieldgroup,
    preview: preview
  }), preview.mode === 'unit' && /*#__PURE__*/_react.default.createElement(_FieldSource.FieldSource, {
    customfield: customunit,
    preview: preview
  }), preview.mode === 'unit-group' && /*#__PURE__*/_react.default.createElement(_FieldGroupSource.FieldGroupSource, {
    fieldgroup: unitgroup,
    preview: preview
  })))))));
}
var _default = exports.default = CustomFieldMaker;