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
var _Field = require("../components/generator/Field");
var _FieldGroup = require("../components/generator/FieldGroup");
var _Unit = require("../components/generator/Unit");
var _UnitGroup = require("../components/generator/UnitGroup");
var _FieldSource = require("../components/FieldSource");
var _FieldGroupSource = require("../components/FieldGroupSource");
var _UnitSource = require("../components/UnitSource");
var _UnitGroupSource = require("../components/UnitGroupSource");
var _FieldConfirmSource = require("../components/FieldConfirmSource");
var _FieldGroupConfirmSource = require("../components/FieldGroupConfirmSource");
var _UnitConfirmSource = require("../components/UnitConfirmSource");
var _UnitGroupConfirmSource = require("../components/UnitGroupConfirmSource");
var _Highlighter = require("../components/Highlighter");
var _htmlEntities = require("html-entities");
const entities = new _htmlEntities.XmlEntities();
function CustomFieldMaker() {
  const {
    setSource,
    state,
    preview,
    clipboard
  } = (0, _MakerContext.useMakerContext)();
  const onSource = encodedHtml => {
    const decodedHtml = entities.decode(encodedHtml);
    if (clipboard.source !== decodedHtml) {
      setSource(decodedHtml);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "customFieldContainer acms-admin-form"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_EditorModeNavigator.EditorModeNavigator, null)), /*#__PURE__*/_react.default.createElement("section", null, preview.mode === 'customfield' && /*#__PURE__*/_react.default.createElement(_Field.Field, null), preview.mode === 'fieldgroup' && /*#__PURE__*/_react.default.createElement(_FieldGroup.FieldGroup, null), preview.mode === 'customunit' && /*#__PURE__*/_react.default.createElement(_Unit.Unit, null), preview.mode === 'unitgroup' && /*#__PURE__*/_react.default.createElement(_UnitGroup.UnitGroup, null)), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("h2", null, "\u30B3\u30FC\u30C9\u30D7\u30EC\u30D3\u30E5\u30FC"), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-tabs"
  }, /*#__PURE__*/_react.default.createElement(_PreviewModeNavigator.PreviewModeNavigator, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-tabs-panel"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "clearfix"
  }, /*#__PURE__*/_react.default.createElement(_PreviewNavigator.PreviewNavigator, null), preview.editMode === 'source' && /*#__PURE__*/_react.default.createElement(_Highlighter.Highlighter, {
    onHighlight: onSource
  }, /*#__PURE__*/_react.default.createElement(_MakerContext.MakerContextProvider, {
    state: state,
    preview: preview,
    clipboard: clipboard
  }, preview.mode === 'customfield' && /*#__PURE__*/_react.default.createElement(_FieldSource.FieldSource, null), preview.mode === 'fieldgroup' && /*#__PURE__*/_react.default.createElement(_FieldGroupSource.FieldGroupSource, null), preview.mode === 'customunit' && /*#__PURE__*/_react.default.createElement(_UnitSource.UnitSource, null), preview.mode === 'unitgroup' && /*#__PURE__*/_react.default.createElement(_UnitGroupSource.UnitGroupSource, null))), preview.editMode === 'preview' && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      borderRadius: '5px',
      padding: '20px',
      margin: '1em 0',
      backgroundColor: '#F0F0F0',
      minHeight: '19.391px'
    }
  }, preview.mode === 'customfield' && /*#__PURE__*/_react.default.createElement(_FieldSource.FieldSource, null), preview.mode === 'fieldgroup' && /*#__PURE__*/_react.default.createElement(_FieldGroupSource.FieldGroupSource, null), preview.mode === 'customunit' && /*#__PURE__*/_react.default.createElement(_UnitSource.UnitSource, null), preview.mode === 'unitgroup' && /*#__PURE__*/_react.default.createElement(_UnitGroupSource.UnitGroupSource, null)), preview.editMode === 'confirm' && /*#__PURE__*/_react.default.createElement(_Highlighter.Highlighter, {
    onHighlight: onSource
  }, /*#__PURE__*/_react.default.createElement(_MakerContext.MakerContextProvider, {
    state: state,
    preview: preview,
    clipboard: clipboard
  }, preview.mode === 'customfield' && /*#__PURE__*/_react.default.createElement(_FieldConfirmSource.FieldConfirmSource, null), preview.mode === 'fieldgroup' && /*#__PURE__*/_react.default.createElement(_FieldGroupConfirmSource.FieldGroupConfirmSource, null), preview.mode === 'customunit' && /*#__PURE__*/_react.default.createElement(_UnitConfirmSource.UnitConfirmSource, null), preview.mode === 'unitgroup' && /*#__PURE__*/_react.default.createElement(_UnitGroupConfirmSource.UnitGroupConfirmSource, null)))))))));
}
var _default = exports.default = CustomFieldMaker;