"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitGroup = UnitGroup;
var _react = _interopRequireWildcard(require("react"));
var _reactTooltip = _interopRequireDefault(require("react-tooltip"));
var _MakerContext = require("../../store/MakerContext");
var _Alert = require("./base/Alert");
var _GroupAlert = require("./base/GroupAlert");
var _DuplicateAlert = require("./base/DuplicateAlert");
var _Basic = require("./base/Basic");
var _ConverterModal = require("./base/ConverterModal");
var _Snippet = require("./base/Snippet");
var _Operator = require("./base/Operator");
var _Validator = require("./base/Validator");
var _OptionItem = require("./base/OptionItem");
var _MediaOption = require("./base/MediaOption");
var _ImageOption = require("./base/ImageOption");
var _ImageResizeOption = require("./base/ImageResizeOption");
var _FileOption = require("./base/FileOption");
var _RichEditorOption = require("./base/RichEditorOption");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const defaultProps = {
  type: 'text',
  title: '',
  name: '',
  placeholder: '',
  tooltip: '',
  alert: false,
  duplicatedField: '',
  path: 'path',
  converter: '',
  normal: 'size',
  useDropArea: true,
  dropAreaWidth: 200,
  dropAreaHeight: 200,
  useFocusImage: false,
  focusImageWidth: 400,
  focusImageHeight: 400,
  startHeadingLevel: 2,
  endHeadingLevel: 3,
  mediaType: 'image',
  useExpand: true,
  option: [{
    value: '',
    label: ''
  }],
  validator: [{
    option: '',
    value: '',
    message: ''
  }],
  optionFormat: 'pref',
  openValidator: false,
  openConverter: false,
  alt: false,
  fileNameMethod: 'random',
  groupAlert: false,
  openGroup: false,
  groupTitle: '',
  groupName: ''
};
const crearField = {
  title: '',
  name: '',
  path: '',
  normalSize: '',
  tiny: '',
  tinySize: '',
  large: '',
  largeSize: '',
  square: '',
  squareSize: '',
  alt: true,
  resize: true,
  useExpand: true,
  useDropArea: true,
  dropAreaWidth: 200,
  dropAreaHeight: 200,
  useFocusImage: false,
  focusImageWidth: 400,
  focusImageHeight: 400,
  startHeadingLevel: 2,
  endHeadingLevel: 3,
  mediaType: 'image',
  openConverter: '',
  openValidator: '',
  converter: '',
  tooltip: '',
  placeholder: ''
};
function UnitGroup() {
  const [field, setField] = (0, _react.useState)(defaultProps);
  const {
    state: {
      unitgroup
    },
    setUnitGroupTitleName,
    addUnitGroupItem,
    clearUnitGroup
  } = (0, _MakerContext.useMakerContext)();
  const showGroup = (0, _react.useCallback)(() => {
    if (!field.groupName) {
      setField(prevState => ({
        ...prevState,
        groupAlert: true
      }));
    } else {
      setField(prevState => ({
        ...prevState,
        groupAlert: false,
        duplicatedField: false,
        openGroup: true
      }));
      setUnitGroupTitleName(field.groupTitle, field.groupName);
    }
  }, [field, setUnitGroupTitleName]);
  const addGroup = (0, _react.useCallback)(() => {
    if (field.name == field.groupName) {
      setField(prevState => ({
        ...prevState,
        duplicatedField: true
      }));
      return;
    }
    if (field.type && field.title && field.name) {
      addUnitGroupItem(field);
    } else {
      setField(prevState => ({
        ...prevState,
        alert: true
      }));
    }
  }, [field, addUnitGroupItem]);
  const clearGroupHandler = (0, _react.useCallback)(() => {
    if (!confirm('生成したコードの履歴も消えてしまいます。よろしいですか？')) return;
    clearUnitGroup();
    setField(crearField);
    setField(prevState => ({
      ...prevState,
      openGroup: false,
      groupTitle: '',
      groupName: ''
    }));
  }, [clearUnitGroup]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "customFieldContainer"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-flex acms-justify-between",
    style: {
      marginBottom: '1em'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      margin: 0
    }
  }, "\u30B0\u30EB\u30FC\u30D7\u540D"), unitgroup.title && unitgroup.name && /*#__PURE__*/_react.default.createElement("button", {
    className: "acms-admin-btn-admin acms-admin-btn-admin-danger",
    onClick: clearGroupHandler
  }, "\u30B0\u30EB\u30FC\u30D7\u3092\u524A\u9664")), /*#__PURE__*/_react.default.createElement(_GroupAlert.GroupAlert, {
    field: field,
    setField: setField
  }), unitgroup.title && unitgroup.name ? /*#__PURE__*/_react.default.createElement("dl", {
    className: "customFieldGeneratorGroup -openGroup",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customFieldGeneratorGroupTitle"
  }, /*#__PURE__*/_react.default.createElement("dt", null, "\u30B0\u30EB\u30FC\u30D7\u30BF\u30A4\u30C8\u30EB", /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip",
    "data-tip": true,
    "data-for": "group-title-tip"
  }), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    id: "group-title-tip",
    place: "top",
    type: "dark",
    effect: "solid",
    className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30C6\u30FC\u30D6\u30EB\u7528\u306E\u30BF\u30A4\u30C8\u30EB\u3068\u306A\u308A\u307E\u3059\u3002"))), /*#__PURE__*/_react.default.createElement("dd", null, unitgroup.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "customFieldGeneratorGroupVal"
  }, /*#__PURE__*/_react.default.createElement("dt", null, "\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\uFF08\u5909\u6570\uFF09", /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip",
    "data-tip": true,
    "data-for": "group-field-tip"
  }), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    id: "group-field-tip",
    place: "top",
    type: "dark",
    effect: "solid",
    className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3067\u3059\u3002\u5024\u3092\u5FC5\u305A\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"))), /*#__PURE__*/_react.default.createElement("dd", null, unitgroup.name))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "customFieldGeneratorGroup"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customFieldGeneratorGroupTitle"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "groupTitle"
  }, "\u30B0\u30EB\u30FC\u30D7\u306E\u30BF\u30A4\u30C8\u30EB", /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip",
    "data-tip": true,
    "data-for": "group-title-tip"
  }), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    id: "group-title-tip",
    place: "top",
    type: "dark",
    effect: "solid",
    className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30C6\u30FC\u30D6\u30EB\u7528\u306E\u30BF\u30A4\u30C8\u30EB\u3068\u306A\u308A\u307E\u3059\u3002")), /*#__PURE__*/_react.default.createElement("span", {
    className: "acms-admin-label acms-admin-label-danger"
  }, "\u5FC5\u9808")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "groupTitle",
    defaultValue: field.groupTitle,
    onInput: e => {
      const value = e.target.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        groupTitle: value
      }));
    },
    className: "acms-admin-form-width-full",
    placeholder: "\u4F8B\uFF09\u30B9\u30BF\u30C3\u30D5\u30EA\u30B9\u30C8"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "customFieldGeneratorGroupVal"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "groupName"
  }, "\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\uFF08\u5909\u6570\uFF09", /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip",
    "data-tip": true,
    "data-for": "group-field-tip"
  }), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    id: "group-field-tip",
    place: "top",
    type: "dark",
    effect: "solid",
    className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3067\u3059\u3002\u5024\u3092\u5FC5\u305A\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), /*#__PURE__*/_react.default.createElement("span", {
    className: "acms-admin-label acms-admin-label-danger"
  }, "\u5FC5\u9808")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "groupName",
    defaultValue: field.groupName,
    onInput: e => {
      const value = e.target.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        groupName: value
      }));
    },
    className: "acms-admin-form-width-full",
    placeholder: "\u4F8B\uFF09group_staff"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "customFieldGeneratorGroupButton"
  }, field.openGroup ? /*#__PURE__*/_react.default.createElement("button", {
    className: "acms-admin-btn acms-admin-btn-primary acms-admin-btn-disabled customFieldGroupBtn",
    id: "makeGroup",
    disabled: true
  }, "\u30B0\u30EB\u30FC\u30D7\u751F\u6210") : /*#__PURE__*/_react.default.createElement("button", {
    className: "acms-admin-btn acms-admin-btn-primary customFieldGroupBtn",
    id: "makeGroup",
    onClick: showGroup
  }, "\u30B0\u30EB\u30FC\u30D7\u751F\u6210"))))), unitgroup.title && unitgroup.name && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "customFieldHeading2"
  }, "\u30B3\u30FC\u30C9\u751F\u6210"), /*#__PURE__*/_react.default.createElement("div", {
    className: "customFieldFunction"
  }, (field.alert || field.duplicatedField) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DuplicateAlert.DuplicateAlert, {
    field: field,
    setField: setField
  }), /*#__PURE__*/_react.default.createElement(_Alert.Alert, {
    field: field,
    setField: setField
  })), /*#__PURE__*/_react.default.createElement(_Basic.Basic, {
    field: field,
    setField: setField
  }), field.type === 'checkbox' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_OptionItem.OptionItem, {
    field: field,
    setField: setField,
    add: false
  })), field.type === 'selectbox' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Snippet.Snippet, {
    field: field,
    setField: setField
  }), /*#__PURE__*/_react.default.createElement(_OptionItem.OptionItem, {
    field: field,
    setField: setField
  })), field.type === 'radioButton' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Snippet.Snippet, {
    field: field,
    setField: setField
  }), /*#__PURE__*/_react.default.createElement(_OptionItem.OptionItem, {
    field: field,
    setField: setField
  })), field.type === 'image' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ImageOption.ImageOption, {
    setField: setField
  }), /*#__PURE__*/_react.default.createElement(_ImageResizeOption.ImageResizeOption, {
    field: field,
    setField: setField
  })), field.type === 'file' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_FileOption.FileOption, {
    field: field,
    setField: setField
  })), field.type === 'media' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MediaOption.MediaOption, {
    field: field,
    setField: setField
  })), field.type === 'rich-editor' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_RichEditorOption.RichEditorOption, {
    field: field,
    setField: setField
  })), /*#__PURE__*/_react.default.createElement(_Validator.Validator, {
    field: field,
    setField: setField
  }), /*#__PURE__*/_react.default.createElement(_Operator.Operator, {
    setField: setField,
    onSubmit: addGroup
  })))), /*#__PURE__*/_react.default.createElement(_ConverterModal.ConverterModal, {
    field: field,
    setField: setField
  }));
}