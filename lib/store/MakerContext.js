'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.MakerContext = void 0;
exports.MakerContextProvider = MakerContextProvider;
exports.useMakerContext = void 0;
var _react = _interopRequireWildcard(require('react'));
var _makerReducer = require('../reducers/makerReducer');
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
  mode: 'customfield',
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
const initialState = {
  customfield: defaultCustomfield,
  fieldgroup: defaultFieldgroup,
  customunit: defaultCustomunit,
  unitgroup: defaultUnitgroup,
  preview: defaultPreview,
  clipboard: defaultClipboard,
  history: {
    customfield: [],
    fieldgroup: [],
    customunit: [],
    unitgroup: [],
  },
  currentIndex: {
    customfield: -1,
    fieldgroup: -1,
    customunit: -1,
    unitgroup: -1,
  },
};
const MakerContext = (exports.MakerContext = /*#__PURE__*/ (0, _react.createContext)({
  state: initialState,
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
  setDirection: () => {},
}));
function MakerContextProvider(_ref) {
  let {
    children,
    state: stateProp = initialState,
    preview: previewProp = defaultPreview,
    clipboard: clipboardProp = defaultClipboard,
  } = _ref;
  const [state, dispatch] = (0, _react.useReducer)(_makerReducer.makerReducer, stateProp);
  const [preview, setPreview] = (0, _react.useState)(previewProp);
  const [clipboard, setClipboard] = (0, _react.useState)(clipboardProp);
  const addCustomfield = (0, _react.useCallback)(
    (newCustomfield) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          customfield: (prevCustomfield) => [...prevCustomfield, newCustomfield],
        },
      }),
    [dispatch]
  );
  const addCustomunit = (0, _react.useCallback)(
    (newCustomunit) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          customunit: [...state.customunit, newCustomunit],
        },
      }),
    [dispatch]
  );
  const setGroupTitleName = (0, _react.useCallback)(
    (title, name) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          fieldgroup: (prevFieldgroup) => ({
            ...prevFieldgroup,
            title,
            name,
          }),
        },
      }),
    [dispatch]
  );
  const addGroupItem = (0, _react.useCallback)(
    (newGroupItem) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          fieldgroup: (prevFieldgroup) => ({
            ...prevFieldgroup,
            items: [...prevFieldgroup.items, newGroupItem],
          }),
        },
      }),
    [dispatch]
  );
  const setUnitGroupTitleName = (0, _react.useCallback)(
    (title, name) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          unitgroup: {
            ...state.unitgroup,
            title,
            name,
          },
        },
      }),
    [dispatch]
  );
  const addUnitGroupItem = (0, _react.useCallback)(
    (newGroupItem) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          unitgroup: {
            ...state.unitgroup,
            items: [...state.unitgroup.items, newGroupItem],
          },
        },
      }),
    [dispatch]
  );
  const clearCustomfield = (0, _react.useCallback)(
    () =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          customfield: [],
        },
      }),
    [dispatch]
  );
  const clearGroupItem = (0, _react.useCallback)(
    () =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          fieldgroup: {
            ...state.fieldgroup,
            items: [],
          },
        },
      }),
    [dispatch]
  );
  const clearCustomunit = (0, _react.useCallback)(() => {
    dispatch({
      type: 'UPDATE_STATE',
      payload: {
        customunit: [],
      },
    });
  }, [dispatch]);
  const clearUnitGroupItem = (0, _react.useCallback)(
    () =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          unitgroup: {
            ...state.unitgroup,
            items: [],
          },
        },
      }),
    [dispatch]
  );
  const undo = (0, _react.useCallback)(
    (target) => {
      dispatch({
        type: 'UNDO',
        payload: {
          target,
        },
      });
    },
    [dispatch]
  );
  const redo = (0, _react.useCallback)(
    (target) => {
      dispatch({
        type: 'REDO',
        payload: {
          target,
        },
      });
    },
    [dispatch]
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
  const setDirection = (0, _react.useCallback)(
    (direction) =>
      setPreview((prevState) => ({
        ...prevState,
        direction,
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
  const value = (0, _react.useMemo)(
    () => ({
      state,
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
      setTag,
      setAcmscss,
      setJsValidator,
      setMode,
      setEditMode,
      setDirection,
      setSource,
      setCopied,
      undo,
      redo,
    }),
    [
      state,
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
      setTag,
      setAcmscss,
      setJsValidator,
      setMode,
      setEditMode,
      setDirection,
      setSource,
      setCopied,
      undo,
      redo,
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
