"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Highlighter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _server = require("react-dom/server");
var _htmlEntities = require("html-entities");
var _jsBeautify = require("js-beautify");
var _highlight = _interopRequireDefault(require("highlight.js/lib/highlight"));
require("highlight.js/styles/default.css");
require("highlight.js/styles/xcode.css");
var _xml = _interopRequireDefault(require("highlight.js/lib/languages/xml"));
var _MakerContext = require("../store/MakerContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
_highlight.default.registerLanguage('xml', _xml.default);
var entities = new _htmlEntities.XmlEntities();
var Highlighter = exports.Highlighter = function Highlighter(_ref) {
  var children = _ref.children;
  var _useMakerContext = (0, _MakerContext.useMakerContext)(),
    preview = _useMakerContext.preview,
    setSource = _useMakerContext.setSource;
  var codeRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    buildSource();
  }, [children]);
  var buildSource = (0, _react.useCallback)(function () {
    var html = (0, _server.renderToString)(children);
    html = html.replace(/&quot;/g, '"');
    html = html.replace(/data-tmp="(.*?)"/g, '$1');
    html = html.replace(/&lt;/g, '<');
    html = html.replace(/&gt;/g, '>');
    html = removeReactText(html);
    var encodedHtml = entities.encode((0, _jsBeautify.html)(html, {
      unformatted: ['code', 'pre'],
      indent_inner_html: true,
      indent_char: ' ',
      indent_size: 2,
      sep: '\n'
    }));
    codeRef.current.innerHTML = encodedHtml;
    _highlight.default.highlightBlock(codeRef.current);
    if (preview.source !== encodedHtml) {
      setSource(encodedHtml);
    }
  });
  var removeReactText = function removeReactText(html) {
    html = html.replace(/<!-- (\/?)reactroot(.*?)-->/g, '');
    html = html.replace(/ data-reactroot=""/g, '');
    return html;
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("pre", {
    className: "acms-admin-customfield-maker"
  }, /*#__PURE__*/_react.default.createElement("code", {
    className: "html",
    ref: codeRef
  })));
};