"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _input = _interopRequireDefault(require("../input"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Table = exports.default = /*#__PURE__*/function (_Input) {
  function Table(props) {
    (0, _classCallCheck2.default)(this, Table);
    return _callSuper(this, Table, [props]);
  }
  (0, _inherits2.default)(Table, _Input);
  return (0, _createClass2.default)(Table, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        acmscss = _this$props.acmscss,
        customfield = _this$props.customfield,
        jsValidator = _this$props.jsValidator;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->', /*#__PURE__*/_react.default.createElement("table", {
        className: (0, _classnames.default)({
          'acms-admin-table-admin-edit': acmscss
        }),
        ref: function ref(table) {
          return _this.table = table;
        }
      }, customfield && customfield.map(function (item, index) {
        if (item.type === 'text') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderText(item)));
        } else if (item.type === 'textarea') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderTextarea(item)));
        } else if (item.type === 'rich-editor') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderRichEditor(item)));
        } else if (item.type === 'table') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderTable(item)));
        } else if (item.type === 'select') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderSelect(item)));
        } else if (item.type === 'radio') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderRadio(item)));
        } else if (item.type === 'checkbox') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderCheckbox(item)));
        } else if (item.type === 'image') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderImage(item)));
        } else if (item.type === 'media') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderMedia(item)));
        } else if (item.type === 'file') {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("td", null, _this.renderFile(item)));
        }
      })), jsValidator && '<!-- </form> -->');
    }
  }]);
}(_input.default);