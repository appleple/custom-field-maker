"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Section = require("./layouts/Section");
var _table = _interopRequireDefault(require("./input/table"));
var _excluded = ["children", "tag"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // import Section from './input/section';
var FieldSource = exports.default = /*#__PURE__*/function (_Component) {
  // static Section = ({ tag,  ...rest }) => tag === "table" && <Section {...rest} />;
  // static Table = ({ tag,  ...rest }) => tag === "table" && <Table {...rest} />;

  function FieldSource(props) {
    var _this;
    (0, _classCallCheck2.default)(this, FieldSource);
    _this = _callSuper(this, FieldSource, [props]);
    (0, _defineProperty2.default)(_this, "renderValidator", function (item, acmscss) {
      var _this$props = _this.props,
        preview = _this$props.preview,
        jsValidator = _this$props.jsValidator;
      if (!item.openValidator) {
        return null;
      }
      var name = item.type === 'file' || item.type === 'image' ? "".concat(item.name, "@path") : item.name;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: item.name
      }, item.validator.map(function (validator) {
        if (!validator.option) {
          return null;
        }
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
          key: validator.option
        }, /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "".concat(name, ":v#").concat(validator.option),
          value: validator.value,
          id: "".concat(name, "-v-").concat(validator.option)
        }), !jsValidator && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, validator.message && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, preview ? null : "<!-- BEGIN ".concat(name, ":validator#").concat(validator.option, " -->"), /*#__PURE__*/_react.default.createElement("p", {
          className: (0, _classnames.default)({
            'acms-admin-text-error': acmscss
          })
        }, validator.message), preview ? null : "<!-- END ".concat(name, ":validator#").concat(validator.option, " -->"))), jsValidator && /*#__PURE__*/_react.default.createElement("div", {
          "data-validator-label": "".concat(name, "-v-").concat(validator.option),
          className: "validator-result-{".concat(name, ":v#").concat(validator.option, "}")
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "error-text"
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "acms-admin-icon acms-admin-icon-attention"
        }), validator.message)));
      }), item.converter && /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: "".concat(name, ":c"),
        value: item.converter
      }));
    });
    (0, _defineProperty2.default)(_this, "renderNoSearch", function (item) {
      if (!item.noSearch) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: "".concat(item.name, ":search"),
        value: "0"
      });
    });
    return _this;
  }
  (0, _inherits2.default)(FieldSource, _Component);
  return (0, _createClass2.default)(FieldSource, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.ACMS && ACMS.dispatchEvent) {
        ACMS.dispatchEvent('acmsCustomFieldMakerPreview', this.table, {
          item: this.table
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        tag = _this$props2.tag,
        rest = (0, _objectWithoutProperties2.default)(_this$props2, _excluded);
      var renderValidator = this.renderValidator,
        renderNoSearch = this.renderNoSearch;
      return _react.default.Children.map(children, function (child) {
        return /*#__PURE__*/_react.default.cloneElement(child, _objectSpread({
          tag: tag,
          renderValidator: renderValidator,
          renderNoSearch: renderNoSearch
        }, rest));
      });
    }
  }]);
}(_react.Component);
(0, _defineProperty2.default)(FieldSource, "Section", function (_ref) {
  var tag = _ref.tag;
  return tag === "section" && /*#__PURE__*/_react.default.createElement(_Section.Section, null);
});
FieldSource.defaultProps = {
  preview: false
};