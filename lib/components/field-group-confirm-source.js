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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ConditionalWrap = function ConditionalWrap(_ref) {
  var condition = _ref.condition,
    wrap = _ref.wrap,
    children = _ref.children;
  return condition ? wrap(children) : children;
};
var FieldGroupConfirmSource = exports.default = /*#__PURE__*/function (_Component) {
  function FieldGroupConfirmSource() {
    (0, _classCallCheck2.default)(this, FieldGroupConfirmSource);
    return _callSuper(this, FieldGroupConfirmSource, arguments);
  }
  (0, _inherits2.default)(FieldGroupConfirmSource, _Component);
  return (0, _createClass2.default)(FieldGroupConfirmSource, [{
    key: "wrapTable",
    value: function wrapTable(children, title) {
      var direction = this.props.direction;
      return /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
        condition: direction === 'vertical',
        wrap: function wrap(children) {
          return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, title), children);
        }
      }, children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        groupTitle = _this$props.groupTitle,
        groupName = _this$props.groupName,
        groupitems = _this$props.groupitems,
        acmscss = _this$props.acmscss,
        direction = _this$props.direction;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, groupTitle && /*#__PURE__*/_react.default.createElement("h2", {
        className: (0, _classnames.default)({
          'acms-admin-admin-title2': acmscss
        })
      }, groupTitle), /*#__PURE__*/_react.default.createElement("table", {
        className: (0, _classnames.default)({
          'adminTable acms-admin-table-admin-edit': acmscss
        })
      }, direction === 'horizontal' && /*#__PURE__*/_react.default.createElement("thead", {
        className: (0, _classnames.default)({
          'acms-admin-hide-sp': acmscss
        })
      }, /*#__PURE__*/_react.default.createElement("tr", null, groupitems.map(function (item) {
        return /*#__PURE__*/_react.default.createElement("th", {
          className: (0, _classnames.default)({
            "acms-admin-table-left": acmscss
          })
        }, item.title);
      }))), /*#__PURE__*/_react.default.createElement("tbody", null, "<!-- BEGIN ".concat(groupName, ":loop -->"), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
        condition: direction === 'vertical',
        wrap: function wrap(children) {
          return /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("table", null, children));
        }
      }, groupitems.map(function (item) {
        if (item.type === 'text') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "}")), item.title);
        } else if (item.type === 'textarea') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "}[escape|nl2br]")), item.title);
        } else if (item.type === 'select') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, item.option.map(function (option) {
            if (!option.label) {
              return null;
            }
            return /*#__PURE__*/_react.default.createElement("div", null, "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->"), option.label, '<!-- END_IF -->');
          })), item.title);
        } else if (item.type === 'radio') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, item.option.map(function (option) {
            if (!option.label) {
              return null;
            }
            return "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->\n                        ").concat(option.label, "\n                        <!-- END_IF -->");
          })), item.title);
        } else if (item.type === 'file') {
          var src = '/images/fileicon/';
          var alt = 'file';
          if (item.extension) {
            src += "".concat(item.extension, ".svg");
            alt += item.extension;
          } else {
            src += 'file.svg';
          }
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, "<!-- BEGIN ".concat(item.name, "@path:veil -->"), /*#__PURE__*/_react.default.createElement("a", {
            href: "%{ARCHIVES_DIR}{".concat(item.name, "@path}")
          }, /*#__PURE__*/_react.default.createElement("img", {
            src: src,
            width: "64",
            height: "64",
            alt: alt
          })), "<!-- END ".concat(item.name, "@path:veil -->")), item.title);
        } else if (item.type === 'image') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, "<!-- BEGIN ".concat(item.name, "@path:veil -->"), /*#__PURE__*/_react.default.createElement("img", {
            src: "%{ARCHIVES_DIR}{".concat(item.name, "@path}"),
            className: (0, _classnames.default)({
              'acms-admin-img-responsive': acmscss
            }),
            alt: "{".concat(item.name, "@alt}")
          }), "<!-- END ".concat(item.name, "@path:veil -->")), item.title);
        } else if (item.type === 'media') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, "<!-- BEGIN_IF [{".concat(item.name, "@type}/eq/file] -->"), /*#__PURE__*/_react.default.createElement("a", {
            href: "{".concat(item.name, "@path}")
          }, /*#__PURE__*/_react.default.createElement("img", {
            alt: "{".concat(item.name, "@alt}"),
            src: "{".concat(item.name, "@thumbnail}"),
            style: {
              width: '64px',
              height: 'auto'
            }
          })), "<!-- END_IF -->", "<!-- BEGIN_IF [{".concat(item.name, "@type}/eq/image] -->"), "<!-- BEGIN_IF [{".concat(item.name, "@link}/nem] -->"), /*#__PURE__*/_react.default.createElement("a", {
            href: "{".concat(item.name, "@link}")
          }, "<!-- END_IF -->", item.useFocusImage && /*#__PURE__*/_react.default.createElement("div", {
            style: {
              width: "".concat(item.focusImageWidth, "px"),
              height: "".concat(item.focusImageHeight, "px")
            }
          }, /*#__PURE__*/_react.default.createElement("img", {
            className: "js-focused-image",
            "data-focus-x": "{".concat(item.name, "@focalX}"),
            "data-focus-y": "{".concat(item.name, "@focalY}"),
            alt: "{".concat(item.name, "@alt}"),
            src: "%{MEDIA_ARCHIVES_DIR}{".concat(item.name, "@path}[resizeImg(").concat(item.focusImageWidth, ")]")
          })), !item.useFocusImage && /*#__PURE__*/_react.default.createElement("img", {
            alt: "{".concat(item.name, "@alt}"),
            src: "%{MEDIA_ARCHIVES_DIR}{".concat(item.name, "@path}")
          }), "<!-- BEGIN_IF [{".concat(item.name, "@link}/nem] -->")), "<!-- END_IF -->", "<!-- BEGIN_IF [{".concat(item.name, "@text}/nem] -->"), /*#__PURE__*/_react.default.createElement("p", null, "{".concat(item.name, "@text}")), '<!-- END_IF -->', '<!-- END_IF -->'), item.title);
        } else if (item.type === 'lite-editor') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "}[raw]")), item.name);
        } else if (item.type === 'rich-editor') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "@html}[raw]")), item.name);
        } else if (item.type === 'table') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "}[raw]")), item.name);
        }
      }))), "<!-- END ".concat(groupName, ":loop -->"))));
    }
  }]);
}(_react.Component);