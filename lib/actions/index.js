"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleJsValidator = exports.toggleAcmsCss = exports.setUnitGroupTitleName = exports.setState = exports.setGroupTitleName = exports.restore = exports.clearUnitGroupTitleName = exports.clearUnitGroupItem = exports.clearGroupItem = exports.clearCustomfield = exports.clearCustomUnit = exports.changeDirection = exports.addUnitGroupItem = exports.addSnippet = exports.addGroupItem = exports.addCustomfield = exports.addCustomUnit = void 0;
var types = _interopRequireWildcard(require("../constants/action-types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var setState = function setState(state) {
  return {
    type: types.SETSTATE,
    state: state
  };
};
exports.setState = setState;
var addCustomfield = function addCustomfield(item) {
  return {
    type: types.ADDCUSTOMFIELD,
    item: item
  };
};
exports.addCustomfield = addCustomfield;
var addGroupItem = function addGroupItem(item) {
  return {
    type: types.ADDGROUPITEM,
    item: item
  };
};
exports.addGroupItem = addGroupItem;
var setGroupTitleName = function setGroupTitleName(_ref) {
  var groupTitle = _ref.groupTitle,
    groupName = _ref.groupName;
  return {
    type: types.SETGROUPTITLENAME,
    groupTitle: groupTitle,
    groupName: groupName
  };
};
exports.setGroupTitleName = setGroupTitleName;
var addCustomUnit = function addCustomUnit(item) {
  return {
    type: types.ADDCUSTOMUNIT,
    item: item
  };
};
exports.addCustomUnit = addCustomUnit;
var addUnitGroupItem = function addUnitGroupItem(item) {
  return {
    type: types.ADDUNITGROUPITEM,
    item: item
  };
};
exports.addUnitGroupItem = addUnitGroupItem;
var setUnitGroupTitleName = function setUnitGroupTitleName(_ref2) {
  var unitGroupTitle = _ref2.unitGroupTitle,
    unitGroupName = _ref2.unitGroupName;
  return {
    type: types.SETUNITGROUPTITLENAME,
    unitGroupTitle: unitGroupTitle,
    unitGroupName: unitGroupName
  };
};
exports.setUnitGroupTitleName = setUnitGroupTitleName;
var clearCustomfield = function clearCustomfield() {
  return {
    type: types.CLEARCUSTOMFIELD
  };
};
exports.clearCustomfield = clearCustomfield;
var clearGroupItem = function clearGroupItem() {
  return {
    type: types.CLEARGROUPITEM
  };
};
exports.clearGroupItem = clearGroupItem;
var clearCustomUnit = function clearCustomUnit() {
  return {
    type: types.CLEARCUSTOMUNIT
  };
};
exports.clearCustomUnit = clearCustomUnit;
var clearUnitGroupItem = function clearUnitGroupItem() {
  return {
    type: types.CLEARUNITGROUPITEM
  };
};
exports.clearUnitGroupItem = clearUnitGroupItem;
var clearUnitGroupTitleName = function clearUnitGroupTitleName() {
  return {
    type: types.CLEARUNITGROUPTITLENAME
  };
};
exports.clearUnitGroupTitleName = clearUnitGroupTitleName;
var toggleAcmsCss = function toggleAcmsCss() {
  return {
    type: types.TOGGLEACMSCSS
  };
};
exports.toggleAcmsCss = toggleAcmsCss;
var toggleJsValidator = function toggleJsValidator() {
  return {
    type: types.TOGGLEJSVALIDATOR
  };
};
exports.toggleJsValidator = toggleJsValidator;
var restore = function restore(storage) {
  return {
    type: types.RESTORE,
    storage: storage
  };
};
exports.restore = restore;
var addSnippet = function addSnippet(name, value) {
  return {
    type: types.ADDSNIPPET,
    name: name,
    value: value
  };
};
exports.addSnippet = addSnippet;
var changeDirection = function changeDirection(direction) {
  return {
    type: types.CHANGEDIRECTION,
    direction: direction
  };
};
exports.changeDirection = changeDirection;