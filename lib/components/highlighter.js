"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _server = require("react-dom/server");
var _htmlEntities = require("html-entities");
var _jsBeautify = require("js-beautify");
var _highlight = _interopRequireDefault(require("highlight.js/lib/highlight"));
require("highlight.js/styles/default.css");
require("highlight.js/styles/xcode.css");
var _xml = _interopRequireDefault(require("highlight.js/lib/languages/xml"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
_highlight["default"].registerLanguage('xml', _xml["default"]);
var entities = new _htmlEntities.XmlEntities();
var Highlighter = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Highlighter, _Component);
  var _super = _createSuper(Highlighter);
  function Highlighter(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Highlighter);
    _this = _super.call(this, props);
    _this.state = {
      source: ''
    };
    return _this;
  }
  (0, _createClass2["default"])(Highlighter, [{
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
      _highlight["default"].highlightBlock(this.code);
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
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("pre", {
        className: "acms-admin-customfield-maker"
      }, /*#__PURE__*/_react["default"].createElement("code", {
        className: "html",
        ref: function ref(code) {
          _this2.code = code;
        }
      })));
    }
  }]);
  return Highlighter;
}(_react.Component);
exports["default"] = Highlighter;