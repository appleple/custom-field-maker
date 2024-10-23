"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = Table;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _MakerContext = require("../../store/MakerContext");
function Table(props) {
  const {
    item,
    id = '',
    isValue = true
  } = props;
  const {
    preview: {
      mode,
      editMode
    }
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, mode === 'customfield' && /*#__PURE__*/_react.default.createElement("div", {
    className: "js-editable-table-field"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "js-editable-table"
  }, editMode === 'preview' ? null : "<!-- BEGIN_IF [{".concat(item.name, "}[delnl]/nem] -->\n"), editMode === 'preview' ? null : "{".concat(item.name, "}[raw]"), editMode === 'preview' ? null : '<!-- ELSE -->', /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"))), editMode === 'preview' ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    className: "js-editable-table-dest",
    value: "{".concat(item.name, "}"),
    name: item.name
  }), /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    type: "hidden",
    name: "field[]",
    value: item.name
  }))), mode === 'fieldgroup' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "js-editable-table-field"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "js-editable-table"
  }, editMode === 'preview' ? null : "<!-- BEGIN_IF [{".concat(item.name, "}[delnl]/nem] -->\n"), editMode === 'preview' ? null : "{".concat(item.name, "}[raw]"), editMode === 'preview' ? null : '<!-- ELSE -->', /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"))), editMode === 'preview' ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    id: id,
    type: "hidden",
    className: "js-editable-table-dest"
  }, isValue && {
    value: "{".concat(item.name, "}")
  }, {
    name: "".concat(item.name, "[]")
  }))))), mode === 'customunit' && /*#__PURE__*/_react.default.createElement("div", {
    className: "js-editable-table-field"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "js-editable-table"
  }, editMode === 'preview' ? null : "<!-- BEGIN_IF [{".concat(item.name, "}[delnl]/nem] -->\n"), editMode === 'preview' ? null : "{".concat(item.name, "}[raw]"), editMode === 'preview' ? null : '<!-- ELSE -->', /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"))), editMode === 'preview' ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    type: "hidden",
    className: "js-editable-table-dest",
    value: "{".concat(item.name, "}"),
    name: "".concat(item.name, "{id}")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "unit{id}[]",
    value: "".concat(item.name, "{id}")
  }))), mode === 'unitgroup' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "js-editable-table-field"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "js-editable-table"
  }, editMode === 'preview' ? null : "<!-- BEGIN_IF [{".concat(item.name, "}[delnl]/nem] -->\n"), editMode === 'preview' ? null : "{".concat(item.name, "}[raw]"), editMode === 'preview' ? null : '<!-- ELSE -->', /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"))), editMode === 'preview' ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    id: id,
    type: "hidden",
    className: "js-editable-table-dest"
  }, isValue && {
    value: "{".concat(item.name, "}")
  }, {
    name: "".concat(item.name, "{id}[]")
  }))))));
}