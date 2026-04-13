"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var types = _interopRequireWildcard(require("../constants/action-types"));
var _history = _interopRequireDefault(require("../lib/history"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var initialState = {
  customfield: [],
  groupitems: [],
  customunit: [],
  unitgroupitems: [],
  snippets: [],
  groupTitle: null,
  groupName: null,
  unitGroupTitle: null,
  unitGroupName: null,
  acmscss: true,
  jsValidator: false,
  direction: 'horizontal'
};
var preserveState = function preserveState(state) {
  _history.default.pushState(state);
  return state;
};
var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SETSTATE:
      return action.state;
    case types.ADDCUSTOMFIELD:
      return preserveState(Object.assign({}, state, {
        customfield: [].concat((0, _toConsumableArray2.default)(state.customfield), [action.item])
      }));
    case types.ADDGROUPITEM:
      return preserveState(Object.assign({}, state, {
        groupitems: [].concat((0, _toConsumableArray2.default)(state.groupitems), [action.item])
      }));
    case types.SETGROUPTITLENAME:
      return preserveState(Object.assign({}, state, {
        groupTitle: action.groupTitle,
        groupName: action.groupName
      }));
    case types.SETUNITGROUPTITLENAME:
      return preserveState(Object.assign({}, state, {
        unitGroupTitle: action.unitGroupTitle,
        unitGroupName: action.unitGroupName
      }));
    case types.ADDCUSTOMUNIT:
      return preserveState(Object.assign({}, state, {
        customunit: [].concat((0, _toConsumableArray2.default)(state.customunit), [action.item])
      }));
    case types.ADDUNITGROUPITEM:
      return preserveState(Object.assign({}, state, {
        unitgroupitems: [].concat((0, _toConsumableArray2.default)(state.unitgroupitems), [action.item])
      }));
    case types.CLEARCUSTOMFIELD:
      return preserveState(Object.assign({}, state, {
        customfield: []
      }));
    case types.CLEARGROUPITEM:
      return preserveState(Object.assign({}, state, {
        groupitems: [],
        groupTitle: null,
        groupName: null
      }));
    case types.CLEARCUSTOMUNIT:
      return preserveState(Object.assign({}, state, {
        customunit: []
      }));
    case types.CLEARUNITGROUPITEM:
      return preserveState(Object.assign({}, state, {
        unitgroupitems: [],
        unitGroupTitle: null,
        unitGroupName: null
      }));
    case types.CLEARUNITGROUPTITLENAME:
      return preserveState(Object.assign({}, state, {
        unitGroupTitle: null,
        unitGroupName: null
      }));
    case types.RESTORE:
      return preserveState(Object.assign({}, state, action.storage));
    case types.TOGGLEACMSCSS:
      return preserveState(Object.assign({}, state, {
        acmscss: !state.acmscss
      }));
    case types.TOGGLEJSVALIDATOR:
      return preserveState(Object.assign({}, state, {
        jsValidator: !state.jsValidator
      }));
    case types.ADDSNIPPET:
      return preserveState(Object.assign({}, state, {
        snippets: [].concat((0, _toConsumableArray2.default)(state.snippets), [{
          name: action.name,
          value: action.value
        }])
      }));
    case types.CHANGEDIRECTION:
      return preserveState(Object.assign({}, state, {
        direction: action.direction
      }));
    default:
      return state;
  }
};
exports.default = _default;