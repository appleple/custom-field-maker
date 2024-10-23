"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Highlighter = Highlighter;
var _react = _interopRequireWildcard(require("react"));
var _server = require("react-dom/server");
var _htmlEntities = require("html-entities");
var _jsBeautify = require("js-beautify");
var _highlight = _interopRequireDefault(require("highlight.js/lib/highlight"));
require("highlight.js/styles/default.css");
require("highlight.js/styles/xcode.css");
var _xml = _interopRequireDefault(require("highlight.js/lib/languages/xml"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
_highlight.default.registerLanguage('xml', _xml.default);
const entities = new _htmlEntities.XmlEntities();
function Highlighter(_ref) {
  let {
    children,
    onHighlight = () => {}
  } = _ref;
  const codeRef = (0, _react.useRef)();
  const removeReactText = html => {
    html = html.replace(/<!-- (\/?)reactroot(.*?)-->/g, '');
    html = html.replace(/ data-reactroot=""/g, '');
    return html;
  };
  const buildSource = (0, _react.useCallback)(reactNode => {
    let html = (0, _server.renderToStaticMarkup)(reactNode);
    html = html.replace(/&quot;/g, '"');
    html = html.replace(/data-tmp="(.*?)"/g, '$1');
    html = html.replace(/&lt;/g, '<');
    html = html.replace(/&gt;/g, '>');
    html = removeReactText(html);
    const encodedHtml = entities.encode((0, _jsBeautify.html)(html, {
      unformatted: ['code', 'pre'],
      indent_inner_html: true,
      indent_char: ' ',
      indent_size: 2,
      sep: '\n'
    }));
    codeRef.current.innerHTML = encodedHtml;
    _highlight.default.highlightBlock(codeRef.current);
    if (onHighlight) {
      onHighlight(encodedHtml);
    }
  }, [onHighlight]);
  (0, _react.useEffect)(() => {
    buildSource(children);
  }, [children, buildSource]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("pre", {
    className: "acms-admin-customfield-maker"
  }, /*#__PURE__*/_react.default.createElement("code", {
    className: "html",
    ref: codeRef
  })));
}