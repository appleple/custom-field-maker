"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Input = exports.default = /*#__PURE__*/function (_Component) {
  function Input(props) {
    (0, _classCallCheck2.default)(this, Input);
    return _callSuper(this, Input, [props]);
  }
  (0, _inherits2.default)(Input, _Component);
  return (0, _createClass2.default)(Input, [{
    key: "getLabel",
    value: function getLabel(item) {
      var jsValidator = this.props.jsValidator;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.title, item.tooltip && /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-icon-tooltip js-acms-tooltip",
        "data-acms-tooltip": item.tooltip
      }), jsValidator && /*#__PURE__*/_react.default.createElement("label", {
        className: "valid-mark",
        "data-validator": item.name
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "acms-admin-icon acms-admin-icon-checklist"
      })));
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(item) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.type === 'checkbox' || item.type === 'radio' ? /*#__PURE__*/_react.default.createElement("legend", null, this.getLabel(item)) : /*#__PURE__*/_react.default.createElement("label", null, this.getLabel(item)));
    }
  }, {
    key: "renderText",
    value: function renderText(item) {
      var _this$props = this.props,
        acmscss = _this$props.acmscss,
        jsValidator = _this$props.jsValidator,
        renderValidator = _this$props.renderValidator,
        renderNoSearch = _this$props.renderNoSearch;
      var type = item.subType ? item.subType : item.type;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
        type: type,
        name: item.name,
        value: "{".concat(item.name, "}"),
        className: (0, _classnames.default)({
          'acms-admin-form-width-full': acmscss
        })
      }, jsValidator ? {
        'data-validator': item.name
      } : {})), /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: "field[]",
        value: item.name
      }), renderValidator(item, acmscss), renderNoSearch(item));
    }
  }, {
    key: "renderTextarea",
    value: function renderTextarea(item) {
      var _this$props2 = this.props,
        acmscss = _this$props2.acmscss,
        jsValidator = _this$props2.jsValidator,
        renderValidator = _this$props2.renderValidator,
        renderNoSearch = _this$props2.renderNoSearch;
      var type = item.subType ? item.subType : item.type;
      var classname = '';
      if (type === 'lite-editor') {
        classname = (0, _classnames.default)('js-lite-editor-field', {
          'acms-admin-form-width-full': acmscss
        });
      } else {
        classname = (0, _classnames.default)({
          'acms-admin-form-width-full': acmscss
        });
      }
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({
        name: item.name,
        className: classname
      }, jsValidator ? {
        'data-validator': item.name
      } : {}), "{".concat(item.name, "}")), /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: "field[]",
        value: item.name
      }), renderValidator(item, acmscss), renderNoSearch(item, acmscss));
    }
  }, {
    key: "renderRichEditor",
    value: function renderRichEditor() {
      return /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
        condition: item.useExpand,
        wrap: function wrap(children) {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "js-expand js-acms-expand"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-acms-expand-inner"
          }, /*#__PURE__*/_react.default.createElement("button", {
            className: "js-expand-btn js-acms-expand-btn",
            type: "button"
          }, /*#__PURE__*/_react.default.createElement("i", {
            className: "acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon"
          })), children));
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "js-smartblock",
        "data-heading-start": item.startHeadingLevel,
        "data-heading-end": item.endHeadingLevel
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "js-smartblock-edit"
      }), /*#__PURE__*/_react.default.createElement("input", {
        className: "js-smartblock-body",
        type: "hidden",
        name: item.name,
        value: "{".concat(item.name, "@html}")
      }), /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: "field[]",
        value: item.name
      }), /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: "".concat(item.name, ":extension"),
        value: "rich-editor"
      })));
    }
  }, {
    key: "renderTable",
    value: function renderTable() {}
  }, {
    key: "renderSelect",
    value: function renderSelect() {}
  }, {
    key: "renderRadio",
    value: function renderRadio() {}
  }, {
    key: "renderCheckbox",
    value: function renderCheckbox() {}
  }, {
    key: "renderImage",
    value: function renderImage() {}
  }, {
    key: "renderMedia",
    value: function renderMedia() {}
  }, {
    key: "renderFile",
    value: function renderFile() {}
  }]);
}(_react.Component);