"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _input = _interopRequireDefault(require("../input"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Section = exports.default = /*#__PURE__*/function (_Input) {
  function Section(props) {
    (0, _classCallCheck2.default)(this, Section);
    return _callSuper(this, Section, [props]);
  }
  (0, _inherits2.default)(Section, _Input);
  return (0, _createClass2.default)(Section, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        acmscss = _this$props.acmscss,
        customfield = _this$props.customfield,
        jsValidator = _this$props.jsValidator;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->', customfield && customfield.map(function (item, index) {
        if (item.type === 'text') {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderText(item)));
        } else if (item.type === 'textarea') {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderTextarea(item)));
        } else if (item.type === 'rich-editor') {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderRichEditor(item)));
        } else if (item.type === 'table') {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderTable(item)));
        } else if (item.type === 'select') {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item, acmscss)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderSelect(item)));
        } else if (item.type === 'radio') {
          return /*#__PURE__*/_react.default.createElement("fieldset", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("legend", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderRadio(item))));
        } else if (item.type === 'checkbox') {
          return /*#__PURE__*/_react.default.createElement("fieldset", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("legend", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderCheckbox(item))));
        } else if (item.type === 'image') {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderImage(item)));
        } else if (item.type === 'media') {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderMedia(item)));
        } else if (item.type === 'file') {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: index,
            className: "acms-admin-form-item"
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: "acms-admin-form-item-heading"
          }, _this.renderLabel(item)), /*#__PURE__*/_react.default.createElement("span", {
            className: "acms-admin-form-item-input"
          }, _this.renderFile(item)));
        }
      }), jsValidator && '<!-- </form> -->');
    }
  }]);
}(_input.default);