"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextareaInput = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MakerContext = require("../../store/MakerContext");
var _AcmsInput = require("./AcmsInput");
var TextareaInput = exports.TextareaInput = function TextareaInput(props) {
  var name = props.name,
    type = props.type,
    subType = props.subType;
  var _useMakerContext = (0, _MakerContext.useMakerContext)(),
    preview = _useMakerContext.preview;
  var selectedType = subType ? subType : type;
  var classname = (0, _classnames.default)({
    'acms-admin-form-width-full': preview && preview.acmscss,
    'js-lite-editor-field': selectedType === 'lite-editor'
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({
    name: name,
    className: classname
  }, preview && preview.jsValidator ? {
    'data-validator': name
  } : {}), "{".concat(name, "}")), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "field[]",
    value: name
  }), (0, _AcmsInput.renderValidator)(props), (0, _AcmsInput.renderNoSearch)(props));
};