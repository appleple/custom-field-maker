"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorContext = void 0;
exports.EditorContextProvider = EditorContextProvider;
exports.useEditorContext = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var initialState = {
  mode: 'normal',
  editMode: 'source',
  source: '',
  copied: false
};
var EditorContext = exports.EditorContext = /*#__PURE__*/(0, _react.createContext)({});
function EditorContextProvider(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)(initialState),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    editor = _useState2[0],
    setEditor = _useState2[1];
  var setEditorState = function setEditorState(newEditorState) {
    return setEditor(_objectSpread({}, newEditorState));
  };
  var setSource = function setSource(source) {
    return setEditor(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        source: source
      });
    });
  };
  var setMode = function setMode(mode) {
    return setEditor(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        mode: mode
      });
    });
  };
  var setEditMode = function setEditMode(editMode) {
    return setEditor(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        editMode: editMode
      });
    });
  };
  return /*#__PURE__*/_react.default.createElement(EditorContext.Provider, {
    value: {
      editor: editor,
      setEditorState: setEditorState,
      setSource: setSource,
      setMode: setMode,
      setEditMode: setEditMode
    }
  }, children);
}
var useEditorContext = exports.useEditorContext = function useEditorContext() {
  return (0, _react.useContext)(EditorContext);
};