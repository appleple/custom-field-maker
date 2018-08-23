'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _actionTypes = require('../constants/action-types');

var types = _interopRequireWildcard(_actionTypes);

var _history = require('../lib/history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  _history2.default.pushState(state);
  return state;
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.SETSTATE:
      return action.state;
    case types.ADDCUSTOMFIELD:
      return preserveState((0, _assign2.default)({}, state, {
        customfield: [].concat((0, _toConsumableArray3.default)(state.customfield), [action.item])
      }));
    case types.ADDGROUPITEM:
      return preserveState((0, _assign2.default)({}, state, {
        groupitems: [].concat((0, _toConsumableArray3.default)(state.groupitems), [action.item])
      }));
    case types.SETGROUPTITLENAME:
      return preserveState((0, _assign2.default)({}, state, {
        groupTitle: action.groupTitle,
        groupName: action.groupName
      }));
    case types.SETUNITGROUPTITLENAME:
      return preserveState((0, _assign2.default)({}, state, {
        unitGroupTitle: action.unitGroupTitle,
        unitGroupName: action.unitGroupName
      }));
    case types.ADDCUSTOMUNIT:
      return preserveState((0, _assign2.default)({}, state, {
        customunit: [].concat((0, _toConsumableArray3.default)(state.customunit), [action.item])
      }));
    case types.ADDUNITGROUPITEM:
      return preserveState((0, _assign2.default)({}, state, {
        unitgroupitems: [].concat((0, _toConsumableArray3.default)(state.unitgroupitems), [action.item])
      }));
    case types.CLEARCUSTOMFIELD:
      return preserveState((0, _assign2.default)({}, state, {
        customfield: []
      }));
    case types.CLEARGROUPITEM:
      return preserveState((0, _assign2.default)({}, state, {
        groupitems: [],
        groupTitle: null,
        groupName: null
      }));
    case types.CLEARCUSTOMUNIT:
      return preserveState((0, _assign2.default)({}, state, {
        customunit: []
      }));
    case types.CLEARUNITGROUPITEM:
      return preserveState((0, _assign2.default)({}, state, {
        unitgroupitems: [],
        unitGroupTitle: null,
        unitGroupName: null
      }));
    case types.CLEARUNITGROUPTITLENAME:
      return preserveState((0, _assign2.default)({}, state, {
        unitGroupTitle: null,
        unitGroupName: null
      }));
    case types.RESTORE:
      return preserveState((0, _assign2.default)({}, state, action.storage));
    case types.TOGGLEACMSCSS:
      return preserveState((0, _assign2.default)({}, state, {
        acmscss: !state.acmscss
      }));
    case types.TOGGLEJSVALIDATOR:
      return preserveState((0, _assign2.default)({}, state, {
        jsValidator: !state.jsValidator
      }));
    case types.ADDSNIPPET:
      return preserveState((0, _assign2.default)({}, state, {
        snippets: [].concat((0, _toConsumableArray3.default)(state.snippets), [{
          name: action.name,
          value: action.value
        }])
      }));
    case types.CHANGEDIRECTION:
      return preserveState((0, _assign2.default)({}, state, {
        direction: action.direction
      }));
    default:
      return state;
  }
};