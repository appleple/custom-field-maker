"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snippet = Snippet;
var _react = _interopRequireWildcard(require("react"));
var _reactTooltip = _interopRequireDefault(require("react-tooltip"));
var _pref = _interopRequireDefault(require("../../../../json/pref.json"));
var _prefEn = _interopRequireDefault(require("../../../../json/pref-en.json"));
var _prefNumber = _interopRequireDefault(require("../../../../json/pref-number.json"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const snippetJSON = {
  pref: _pref.default,
  'pref-en': _prefEn.default,
  'pref-number': _prefNumber.default
};
function Snippet(props) {
  const {
    field: {
      option,
      optionFormat
    },
    setField
  } = props;
  const [isSnippet, setIsSnippet] = (0, _react.useState)(false);
  const applySnippet = () => {
    const res = snippetJSON[optionFormat];
    setField(prevState => ({
      ...prevState,
      option: [...option, ...res]
    }));
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "customFieldBold"
  }, "\u9078\u629E\u9805\u76EE\uFF08option\u8981\u7D20\uFF09", /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-icon-tooltip",
    "data-tip": true,
    "data-for": "option-value-tip"
  }), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    id: "option-value-tip",
    place: "top",
    type: "dark",
    effect: "solid",
    className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
  }, /*#__PURE__*/_react.default.createElement("span", null, "option\u8981\u7D20\u306E\u9078\u629E\u9805\u76EE\u306B\u306A\u308A\u307E\u3059\u3002"))), /*#__PURE__*/_react.default.createElement("span", {
    className: "customFieldUseSnippet"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "customFieldUseSnippetLabel",
    style: {
      marginRight: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    style: {
      display: 'none'
    },
    value: "true",
    onChange: () => {
      setIsSnippet(!isSnippet);
    }
  }), isSnippet ? 'スニペットを使用しない' : 'スニペットを使用する'), isSnippet && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("select", {
    style: {
      verticalAlign: 'middle',
      marginRight: '5px'
    },
    value: optionFormat,
    onChange: e => {
      setField(prevState => ({
        ...prevState,
        optionFormat: e.target.value
      }));
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "pref"
  }, "\u90FD\u9053\u5E9C\u770C"), /*#__PURE__*/_react.default.createElement("option", {
    value: "pref-en"
  }, "\u90FD\u9053\u5E9C\u770C\uFF08\u82F1\u8A9E\uFF09"), /*#__PURE__*/_react.default.createElement("option", {
    value: "pref-number"
  }, "\u90FD\u9053\u5E9C\u770C\uFF08\u9023\u756A\uFF09")), /*#__PURE__*/_react.default.createElement("button", {
    className: "acms-admin-btn",
    onClick: applySnippet,
    style: {
      verticalAlign: 'middle'
    }
  }, "\u8FFD\u52A0"))));
}