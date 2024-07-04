"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderValidator = exports.renderNoSearch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MakerContext = require("../../store/MakerContext");
var _EditorContext = require("../../store/EditorContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var renderValidator = exports.renderValidator = function renderValidator(props) {
  var _useMakerContext = (0, _MakerContext.useMakerContext)(),
    maker = _useMakerContext.maker;
  var _useEditorContext = (0, _EditorContext.useEditorContext)(),
    editor = _useEditorContext.editor;
  if (!props.openValidator) {
    return null;
  }
  var name = props.type === 'file' || props.type === 'image' ? "".concat(props.name, "@path") : props.name;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: props.name
  }, props.validator.map(function (validator) {
    if (!validator.option) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: validator.option
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "hidden",
      name: "".concat(name, ":v#").concat(validator.option),
      value: validator.value,
      id: "".concat(name, "-v-").concat(validator.option)
    }), !maker.jsValidator && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, validator.message && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, editor.editMode === 'preview' ? null : "<!-- BEGIN ".concat(name, ":validator#").concat(validator.option, " -->"), /*#__PURE__*/_react.default.createElement("p", {
      className: (0, _classnames.default)({
        'acms-admin-text-error': acmscss
      })
    }, validator.message), editor.editMode === 'preview' ? null : "<!-- END ".concat(name, ":validator#").concat(validator.option, " -->"))), !maker.jsValidator && /*#__PURE__*/_react.default.createElement("div", {
      "data-validator-label": "".concat(name, "-v-").concat(validator.option),
      className: "validator-result-{".concat(name, ":v#").concat(validator.option, "}")
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "error-text"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "acms-admin-icon acms-admin-icon-attention"
    }), validator.message)));
  }), props.converter && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(name, ":c"),
    value: props.converter
  }));
};
var renderNoSearch = exports.renderNoSearch = function renderNoSearch(props) {
  var noSearch = props.noSearch,
    name = props.name;
  if (!noSearch) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(name, ":search"),
    value: "0"
  });
};