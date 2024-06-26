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
var _server = require("react-dom/server");
var _htmlEntities = require("html-entities");
var _jsBeautify = require("js-beautify");
var _highlight = _interopRequireDefault(require("highlight.js/lib/highlight"));
require("highlight.js/styles/default.css");
require("highlight.js/styles/xcode.css");
var _xml = _interopRequireDefault(require("highlight.js/lib/languages/xml"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
_highlight.default.registerLanguage('xml', _xml.default);
var entities = new _htmlEntities.XmlEntities();
var Highlighter = exports.default = /*#__PURE__*/function (_Component) {
  function Highlighter(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Highlighter);
    _this = _callSuper(this, Highlighter, [props]);
    _this.state = {
      source: ''
    };
    return _this;
  }
  (0, _inherits2.default)(Highlighter, _Component);
  return (0, _createClass2.default)(Highlighter, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.buildSource();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.buildSource();
    }
  }, {
    key: "buildSource",
    value: function buildSource() {
      var source = this.state.source;
      var children = this.props.children;
      var html = (0, _server.renderToStaticMarkup)(children);
      html = html.replace(/&quot;/g, '"');
      html = html.replace(/data-tmp="(.*?)"/g, '$1');
      html = html.replace(/&lt;/g, '<');
      html = html.replace(/&gt;/g, '>');
      this.code.innerHTML = entities.encode((0, _jsBeautify.html)(html, {
        unformatted: ['code', 'pre'],
        indent_inner_html: true,
        indent_char: ' ',
        indent_size: 2,
        sep: '\n'
      }));
      _highlight.default.highlightBlock(this.code);
      if (source !== this.code.innerText && this.props.onSourceGenerated) {
        this.props.onSourceGenerated(this.code.innerText);
        this.setState({
          source: this.code.innerText
        });
      }
    }
  }, {
    key: "removeReactText",
    value: function removeReactText(html) {
      html = html.replace(/<!-- (\/?)react-text(.*?)-->/g, '');
      return html;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("pre", {
        className: "acms-admin-customfield-maker"
      }, /*#__PURE__*/_react.default.createElement("code", {
        className: "html",
        ref: function ref(code) {
          _this2.code = code;
        }
      })));
    }
  }]);
}(_react.Component);