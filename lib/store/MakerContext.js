'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.MakerContext = void 0;
exports.MakerContextProvider = MakerContextProvider;
exports.useMakerContext = void 0;
var _react = _interopRequireWildcard(require('react'));
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ('default' !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
const defaultCustomfield = [];
const defaultFieldgroup = {
  items: [],
  title: null,
  name: null,
};
const defaultCustomunit = [];
const defaultUnitgroup = {
  items: [],
  title: null,
  name: null,
};
const defaultPreview = {
  mode: 'normal',
  editMode: 'source',
  tag: 'section',
  acmscss: true,
  jsValidator: false,
  direction: 'horizontal',
};
const defaultClipboard = {
  source: '',
  copied: false,
};
const MakerContext = (exports.MakerContext = /*#__PURE__*/ (0, _react.createContext)({
  customfield: defaultCustomfield,
  fieldgroup: defaultFieldgroup,
  customunit: defaultCustomunit,
  unitgroup: defaultUnitgroup,
  preview: defaultPreview,
  clipboard: defaultClipboard,
  addCustomfield: () => {},
  addCustomunit: () => {},
  setGroupTitleName: () => {},
  addGroupItem: () => {},
  setUnitGroupTitleName: () => {},
  addUnitGroupItem: () => {},
  clearCustomfield: () => {},
  clearGroupItem: () => {},
  clearCustomunit: () => {},
  clearUnitGroupItem: () => {},
  setSource: () => {},
  setMode: () => {},
  setEditMode: () => {},
  setTag: () => {},
  setAcmscss: () => {},
  setJsValidator: () => {},
}));
function MakerContextProvider(_ref) {
  let {
    children,
    customfield: customfieldProp = defaultCustomfield,
    fieldgroup: fieldgroupProp = defaultFieldgroup,
    customunit: customunitProp = defaultCustomunit,
    unitgroup: unitgroupProp = defaultUnitgroup,
    preview: previewProp = defaultPreview,
    clipboard: clipboardProp = defaultClipboard,
  } = _ref;
  // const initialState = {
  //   customfield: [],
  //   groupitems: [],
  //   customunit: [],
  //   unitgroupitems: [],
  //   snippets: [],
  //   groupTitle: null,
  //   groupName: null,
  //   unitGroupTitle: null,
  //   unitGroupName: null,
  //   tag: 'section',
  //   acmscss: true,
  //   jsValidator: false,
  //   direction: 'horizontal'
  // }

  const [customfield, setCustomfield] = (0, _react.useState)(customfieldProp);
  const [fieldgroup, setGroup] = (0, _react.useState)(fieldgroupProp);
  const [customunit, setCustomunit] = (0, _react.useState)(customunitProp);
  const [unitgroup, setUnitgroup] = (0, _react.useState)(unitgroupProp);
  const [preview, setPreview] = (0, _react.useState)(previewProp);
  const [clipboard, setClipboard] = (0, _react.useState)(clipboardProp);
  const addCustomfield = (0, _react.useCallback)(
    (newCustomfield) => setCustomfield((prevState) => [...prevState, newCustomfield]),
    [setCustomfield]
  );
  const addCustomunit = (0, _react.useCallback)(
    (newCustomunit) => setCustomunit((prevState) => [...prevState, newCustomunit]),
    [setCustomunit]
  );
  const setGroupTitleName = (0, _react.useCallback)(
    (title, name) =>
      setGroup((prevState) => ({
        ...prevState,
        title,
        name,
      })),
    [setGroup]
  );
  const addGroupItem = (0, _react.useCallback)(
    (newGroupItem) =>
      setGroup((prevState) => ({
        ...prevState,
        items: [...prevState.items, newGroupItem],
      })),
    [setGroup]
  );
  const setUnitGroupTitleName = (0, _react.useCallback)(
    (title, name) =>
      setUnitgroup((prevState) => ({
        ...prevState,
        title,
        name,
      })),
    [setUnitgroup]
  );
  const addUnitGroupItem = (0, _react.useCallback)(
    (newGroupItem) =>
      setUnitgroup((prevState) => ({
        ...prevState,
        items: [...prevState.items, newGroupItem],
      })),
    [setUnitgroup]
  );
  const clearCustomfield = (0, _react.useCallback)(() => setCustomfield([]), [setCustomfield]);
  const clearGroupItem = (0, _react.useCallback)(
    () =>
      setGroup((prevState) => ({
        ...prevState,
        items: [],
      })),
    [setGroup]
  );
  const clearCustomunit = (0, _react.useCallback)(() => setCustomunit([]), [setCustomunit]);
  const clearUnitGroupItem = (0, _react.useCallback)(
    () =>
      setUnitgroup((prevState) => ({
        ...prevState,
        items: [],
      })),
    [setUnitgroup]
  );
  const setTag = (0, _react.useCallback)(
    (tag) =>
      setPreview((prevState) => ({
        ...prevState,
        tag,
      })),
    [setPreview]
  );
  const setAcmscss = (0, _react.useCallback)(
    (acmscss) =>
      setPreview((prevState) => ({
        ...prevState,
        acmscss,
      })),
    [setPreview]
  );
  const setJsValidator = (0, _react.useCallback)(
    (jsValidator) =>
      setPreview((prevState) => ({
        ...prevState,
        jsValidator,
      })),
    [setPreview]
  );
  const setMode = (0, _react.useCallback)(
    (mode) =>
      setPreview((prevState) => ({
        ...prevState,
        mode,
      })),
    [setPreview]
  );
  const setEditMode = (0, _react.useCallback)(
    (editMode) =>
      setPreview((prevState) => ({
        ...prevState,
        editMode,
      })),
    [setPreview]
  );
  const setSource = (0, _react.useCallback)(
    (source) =>
      setClipboard((prevState) => ({
        ...prevState,
        source,
      })),
    [setClipboard]
  );
  const setCopied = (0, _react.useCallback)(
    (copied) =>
      setClipboard((prevState) => ({
        ...prevState,
        copied,
      })),
    [setClipboard]
  );

  // const clearUnitGroupTitleName = () => ({ type: types.CLEARUNITGROUPTITLENAME });
  // const restore = (storage) => ({ type: types.RESTORE, storage });
  // const addSnippet = (name, value) => ({ type: types.ADDSNIPPET, name, value });
  // const changeDirection = (direction) => ({ type: types.CHANGEDIRECTION, direction });

  const value = (0, _react.useMemo)(
    () => ({
      customfield,
      fieldgroup,
      customunit,
      unitgroup,
      preview,
      clipboard,
      addCustomfield,
      addCustomunit,
      setGroupTitleName,
      addGroupItem,
      setUnitGroupTitleName,
      addUnitGroupItem,
      clearCustomfield,
      clearGroupItem,
      clearCustomunit,
      clearUnitGroupItem,
      setMode,
      setEditMode,
      setTag,
      setAcmscss,
      setJsValidator,
      setSource,
      setCopied,
    }),
    [
      customfield,
      fieldgroup,
      customunit,
      unitgroup,
      preview,
      clipboard,
      addCustomfield,
      addCustomunit,
      setGroupTitleName,
      addGroupItem,
      setUnitGroupTitleName,
      addUnitGroupItem,
      clearCustomfield,
      clearGroupItem,
      clearCustomunit,
      clearUnitGroupItem,
      setMode,
      setEditMode,
      setTag,
      setAcmscss,
      setJsValidator,
      setSource,
      setCopied,
    ]
  );
  return /*#__PURE__*/ _react.default.createElement(
    MakerContext.Provider,
    {
      value: value,
    },
    children
  );
}
const useMakerContext = () => (0, _react.useContext)(MakerContext);
exports.useMakerContext = useMakerContext;
