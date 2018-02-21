'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSnippet = exports.restore = exports.toggleAcmsCss = exports.clearUnitGroupTitleName = exports.clearUnitGroupItem = exports.clearCustomUnit = exports.clearGroupItem = exports.clearCustomfield = exports.setUnitGroupTitleName = exports.addUnitGroupItem = exports.addCustomUnit = exports.setGroupTitleName = exports.addGroupItem = exports.addCustomfield = undefined;

var _actionTypes = require('../constants/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addCustomfield = exports.addCustomfield = function addCustomfield(item) {
  return { type: types.ADDCUSTOMFIELD, item: item };
};
var addGroupItem = exports.addGroupItem = function addGroupItem(item) {
  return { type: types.ADDGROUPITEM, item: item };
};
var setGroupTitleName = exports.setGroupTitleName = function setGroupTitleName(_ref) {
  var groupTitle = _ref.groupTitle,
      groupName = _ref.groupName;
  return { type: types.SETGROUPTITLENAME, groupTitle: groupTitle, groupName: groupName };
};
var addCustomUnit = exports.addCustomUnit = function addCustomUnit(item) {
  return { type: types.ADDCUSTOMUNIT, item: item };
};
var addUnitGroupItem = exports.addUnitGroupItem = function addUnitGroupItem(item) {
  return { type: types.ADDUNITGROUPITEM, item: item };
};
var setUnitGroupTitleName = exports.setUnitGroupTitleName = function setUnitGroupTitleName(_ref2) {
  var unitGroupTitle = _ref2.unitGroupTitle,
      unitGroupName = _ref2.unitGroupName;
  return { type: types.SETUNITGROUPTITLENAME, unitGroupTitle: unitGroupTitle, unitGroupName: unitGroupName };
};
var clearCustomfield = exports.clearCustomfield = function clearCustomfield() {
  return { type: types.CLEARCUSTOMFIELD };
};
var clearGroupItem = exports.clearGroupItem = function clearGroupItem() {
  return { type: types.CLEARGROUPITEM };
};
var clearCustomUnit = exports.clearCustomUnit = function clearCustomUnit() {
  return { type: types.CLEARCUSTOMUNIT };
};
var clearUnitGroupItem = exports.clearUnitGroupItem = function clearUnitGroupItem() {
  return { type: types.CLEARUNITGROUPITEM };
};
var clearUnitGroupTitleName = exports.clearUnitGroupTitleName = function clearUnitGroupTitleName() {
  return { type: types.CLEARUNITGROUPTITLENAME };
};
var toggleAcmsCss = exports.toggleAcmsCss = function toggleAcmsCss() {
  return { type: types.TOGGLEACMSCSS };
};
var restore = exports.restore = function restore(storage) {
  return { type: types.RESTORE, storage: storage };
};
var addSnippet = exports.addSnippet = function addSnippet(name, value) {
  return { type: types.ADDSNIPPET, name: name, value: value };
};