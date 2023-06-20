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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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