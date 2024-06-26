"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleJsValidator = exports.toggleAcmsCss = exports.setUnitGroupTitleName = exports.setTag = exports.setState = exports.setGroupTitleName = exports.restore = exports.clearUnitGroupTitleName = exports.clearUnitGroupItem = exports.clearGroupItem = exports.clearCustomfield = exports.clearCustomUnit = exports.changeDirection = exports.addUnitGroupItem = exports.addSnippet = exports.addGroupItem = exports.addCustomfield = exports.addCustomUnit = void 0;
var types = _interopRequireWildcard(require("../constants/action-types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var setState = exports.setState = function setState(state) {
  return {
    type: types.SETSTATE,
    state: state
  };
};
var addCustomfield = exports.addCustomfield = function addCustomfield(item) {
  return {
    type: types.ADDCUSTOMFIELD,
    item: item
  };
};
var addGroupItem = exports.addGroupItem = function addGroupItem(item) {
  return {
    type: types.ADDGROUPITEM,
    item: item
  };
};
var setGroupTitleName = exports.setGroupTitleName = function setGroupTitleName(_ref) {
  var groupTitle = _ref.groupTitle,
    groupName = _ref.groupName;
  return {
    type: types.SETGROUPTITLENAME,
    groupTitle: groupTitle,
    groupName: groupName
  };
};
var addCustomUnit = exports.addCustomUnit = function addCustomUnit(item) {
  return {
    type: types.ADDCUSTOMUNIT,
    item: item
  };
};
var addUnitGroupItem = exports.addUnitGroupItem = function addUnitGroupItem(item) {
  return {
    type: types.ADDUNITGROUPITEM,
    item: item
  };
};
var setUnitGroupTitleName = exports.setUnitGroupTitleName = function setUnitGroupTitleName(_ref2) {
  var unitGroupTitle = _ref2.unitGroupTitle,
    unitGroupName = _ref2.unitGroupName;
  return {
    type: types.SETUNITGROUPTITLENAME,
    unitGroupTitle: unitGroupTitle,
    unitGroupName: unitGroupName
  };
};
var clearCustomfield = exports.clearCustomfield = function clearCustomfield() {
  return {
    type: types.CLEARCUSTOMFIELD
  };
};
var clearGroupItem = exports.clearGroupItem = function clearGroupItem() {
  return {
    type: types.CLEARGROUPITEM
  };
};
var clearCustomUnit = exports.clearCustomUnit = function clearCustomUnit() {
  return {
    type: types.CLEARCUSTOMUNIT
  };
};
var clearUnitGroupItem = exports.clearUnitGroupItem = function clearUnitGroupItem() {
  return {
    type: types.CLEARUNITGROUPITEM
  };
};
var clearUnitGroupTitleName = exports.clearUnitGroupTitleName = function clearUnitGroupTitleName() {
  return {
    type: types.CLEARUNITGROUPTITLENAME
  };
};
var setTag = exports.setTag = function setTag(value) {
  return {
    type: types.SETTAG,
    value: value
  };
};
var toggleAcmsCss = exports.toggleAcmsCss = function toggleAcmsCss() {
  return {
    type: types.TOGGLEACMSCSS
  };
};
var toggleJsValidator = exports.toggleJsValidator = function toggleJsValidator() {
  return {
    type: types.TOGGLEJSVALIDATOR
  };
};
var restore = exports.restore = function restore(storage) {
  return {
    type: types.RESTORE,
    storage: storage
  };
};
var addSnippet = exports.addSnippet = function addSnippet(name, value) {
  return {
    type: types.ADDSNIPPET,
    name: name,
    value: value
  };
};
var changeDirection = exports.changeDirection = function changeDirection(direction) {
  return {
    type: types.CHANGEDIRECTION,
    direction: direction
  };
};