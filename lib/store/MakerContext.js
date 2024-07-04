"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakerContext = void 0;
exports.MakerContextProvider = MakerContextProvider;
exports.useMakerContext = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MakerContext = exports.MakerContext = /*#__PURE__*/(0, _react.createContext)({});
function MakerContextProvider(_ref) {
  var children = _ref.children;
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

  // const [maker, setMaker] = useState(initialState)
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    customfield = _useState2[0],
    setCustomfield = _useState2[1];
  var _useState3 = (0, _react.useState)({
      items: [],
      title: null,
      name: null
    }),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    fieldgroup = _useState4[0],
    setGroup = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    customunit = _useState6[0],
    setCustomunit = _useState6[1];
  var _useState7 = (0, _react.useState)({
      items: [],
      title: null,
      name: null
    }),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    unitgroup = _useState8[0],
    setUnitgroup = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    snippets = _useState10[0],
    setSnippets = _useState10[1];
  var _useState11 = (0, _react.useState)({
      mode: 'normal',
      editMode: 'source',
      source: '',
      copied: false,
      tag: 'section',
      acmscss: true,
      jsValidator: false,
      direction: 'horizontal'
    }),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    preview = _useState12[0],
    setPreview = _useState12[1];

  // const setMakerState = (newState) => setMaker({ ...newState })
  var addCustomfield = function addCustomfield(newCustomfield) {
    return setCustomfield(function (prevState) {
      return [].concat((0, _toConsumableArray2.default)(prevState), [newCustomfield]);
    });
  };
  var addCustomunit = function addCustomunit(newCustomunit) {
    return setCustomunit(function (prevState) {
      return [].concat((0, _toConsumableArray2.default)(prevState), [newCustomunit]);
    });
  };
  var setGroupTitleName = function setGroupTitleName(title, name) {
    return setGroup(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        title: title,
        name: name
      });
    });
  };
  var addGroupItem = function addGroupItem(newGroupItem) {
    return setGroup(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        items: [].concat((0, _toConsumableArray2.default)(prevState.items), [newGroupItem])
      });
    });
  };
  var setUnitGroupTitleName = function setUnitGroupTitleName(title, name) {
    return setUnitgroup(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        title: title,
        name: name
      });
    });
  };
  var addUnitGroupItem = function addUnitGroupItem(newGroupItem) {
    return setUnitgroup(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        items: [].concat((0, _toConsumableArray2.default)(prevState.items), [newGroupItem])
      });
    });
  };
  var clearGroupItem = function clearGroupItem() {
    return setGroup(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        items: []
      });
    });
  };
  var clearUnitGroupItem = function clearUnitGroupItem() {
    return setUnitgroup(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        items: []
      });
    });
  };
  var setTag = function setTag(tag) {
    return setPreview(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        tag: tag
      });
    });
  };
  var setAcmscss = function setAcmscss(acmscss) {
    return setPreview(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        acmscss: acmscss
      });
    });
  };
  var setJsValidator = function setJsValidator(jsValidator) {
    return setPreview(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        jsValidator: jsValidator
      });
    });
  };
  var setSource = function setSource(source) {
    return setPreview(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        source: source
      });
    });
  };
  var setMode = function setMode(mode) {
    return setPreview(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        mode: mode
      });
    });
  };
  var setEditMode = function setEditMode(editMode) {
    return setPreview(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        editMode: editMode
      });
    });
  };

  // const clearCustomfield = () => ({ type: types.CLEARCUSTOMFIELD });
  // const clearCustomUnit = () => ({ type: types.CLEARCUSTOMUNIT });
  // const clearUnitGroupTitleName = () => ({ type: types.CLEARUNITGROUPTITLENAME });
  // const restore = (storage) => ({ type: types.RESTORE, storage });
  // const addSnippet = (name, value) => ({ type: types.ADDSNIPPET, name, value });
  // const changeDirection = (direction) => ({ type: types.CHANGEDIRECTION, direction });

  return /*#__PURE__*/_react.default.createElement(MakerContext.Provider, {
    value: {
      customfield: customfield,
      fieldgroup: fieldgroup,
      customunit: customunit,
      snippets: snippets,
      unitgroup: unitgroup,
      preview: preview,
      addCustomfield: addCustomfield,
      addCustomunit: addCustomunit,
      setGroupTitleName: setGroupTitleName,
      addGroupItem: addGroupItem,
      setUnitGroupTitleName: setUnitGroupTitleName,
      addUnitGroupItem: addUnitGroupItem,
      clearGroupItem: clearGroupItem,
      clearUnitGroupItem: clearUnitGroupItem,
      setSource: setSource,
      setMode: setMode,
      setEditMode: setEditMode,
      setTag: setTag,
      setAcmscss: setAcmscss,
      setJsValidator: setJsValidator,
      setSnippets: setSnippets
    }
  }, children);
}
var useMakerContext = exports.useMakerContext = function useMakerContext() {
  return (0, _react.useContext)(MakerContext);
};