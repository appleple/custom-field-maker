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
  acmscss: true
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.ADDCUSTOMFIELD:
      return (0, _assign2.default)({}, state, {
        customfield: [].concat((0, _toConsumableArray3.default)(state.customfield), [action.item])
      });
    case types.ADDGROUPITEM:
      return (0, _assign2.default)({}, state, {
        groupitems: [].concat((0, _toConsumableArray3.default)(state.groupitems), [action.item])
      });
    case types.SETGROUPTITLENAME:
      return (0, _assign2.default)({}, state, {
        groupTitle: action.groupTitle,
        groupName: action.groupName
      });
    case types.SETUNITGROUPTITLENAME:
      return (0, _assign2.default)({}, state, {
        unitGroupTitle: action.unitGroupTitle,
        unitGroupName: action.unitGroupName
      });
    case types.ADDCUSTOMUNIT:
      return (0, _assign2.default)({}, state, {
        customunit: [].concat((0, _toConsumableArray3.default)(state.customunit), [action.item])
      });
    case types.ADDUNITGROUPITEM:
      return (0, _assign2.default)({}, state, {
        unitgroupitems: [].concat((0, _toConsumableArray3.default)(state.unitgroupitems), [action.item])
      });
    case types.CLEARCUSTOMFIELD:
      return (0, _assign2.default)({}, state, {
        customfield: []
      });
    case types.CLEARGROUPITEM:
      return (0, _assign2.default)({}, state, {
        groupitems: [],
        groupTitle: null,
        groupName: null
      });
    case types.CLEARCUSTOMUNIT:
      return (0, _assign2.default)({}, state, {
        customunit: []
      });
    case types.CLEARUNITGROUPITEM:
      return (0, _assign2.default)({}, state, {
        unitgroupitems: []
      });
    case types.CLEARUNITGROUPTITLENAME:
      return (0, _assign2.default)({}, state, {
        unitGroupTitle: null,
        unitGroupName: null
      });
    case types.RESTORE:
      return (0, _assign2.default)({}, state, action.storage);
    case types.TOGGLEACMSCSS:
      return (0, _assign2.default)({}, state, {
        acmscss: !state.acmscss
      });
    case types.ADDSNIPPET:
      return (0, _assign2.default)({}, state, {
        snippets: [].concat((0, _toConsumableArray3.default)(state.snippets), [{
          name: action.name,
          value: action.value
        }])
      });
    default:
      return state;
  }
};