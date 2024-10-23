"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConverterModal = ConverterModal;
var _react = _interopRequireWildcard(require("react"));
var _ModalDialog = require("../../ModalDialog");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ConverterModal(props) {
  const {
    field: {
      converter,
      openConverter
    },
    setField
  } = props;
  const optionsRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const converterList = converter.split('');
    const rows = optionsRef.current.querySelectorAll('tr');
    rows.forEach(row => {
      const tdElement = row.querySelector('td');
      if (tdElement) {
        const tdText = tdElement.textContent.trim();
        const isMatch = converterList.includes(tdText);
        row.style.backgroundColor = isMatch ? '#e6f3ff' : '';
      }
    });
  }, [converter]);
  const onOpenConverter = (0, _react.useCallback)(() => {
    setField(prevState => ({
      ...prevState,
      openConverter: false
    }));
  }, [setField]);
  const onConverter = (0, _react.useCallback)(addConverter => {
    setField(prevState => {
      const currentConverter = prevState.converter;
      const index = currentConverter.toLowerCase().indexOf(addConverter.toLowerCase());
      let newConverter = currentConverter;
      if (index === -1) {
        newConverter += addConverter;
      } else {
        newConverter = newConverter.slice(0, index) + addConverter + newConverter.slice(index + addConverter.length);
      }
      return {
        ...prevState,
        converter: newConverter
      };
    });
  }, [setField]);
  const onRemoveConverter = (0, _react.useCallback)(removeConverter => {
    setField(prevState => {
      const newConverter = prevState.converter.replace(removeConverter, '');
      return {
        ...prevState,
        converter: newConverter
      };
    });
  }, [setField]);
  const renderButton = option => {
    const isAdded = converter.includes(option);
    if (isAdded) {
      return /*#__PURE__*/_react.default.createElement("button", {
        className: "acms-admin-btn acms-admin-btn-danger",
        onClick: () => onRemoveConverter(option)
      }, "\u524A\u9664");
    }
    return /*#__PURE__*/_react.default.createElement("button", {
      className: "acms-admin-btn",
      onClick: () => onConverter(option)
    }, "\u8FFD\u52A0");
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ModalDialog.ModalDialog, {
    open: openConverter,
    title: "\u30B3\u30F3\u30D0\u30FC\u30BF\u30FC\u53C2\u7167",
    onClose: onOpenConverter
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "acms-admin-table acms-admin-table-heading acms-admin-table-hover",
    ref: optionsRef
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u30AA\u30D7\u30B7\u30E7\u30F3"), /*#__PURE__*/_react.default.createElement("th", null, "\u610F\u5473"), /*#__PURE__*/_react.default.createElement("th", null, "\u8FFD\u52A0")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "r"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u5168\u89D2\u300D\u82F1\u5B57\u3092\u300C\u534A\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('r'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "R"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u534A\u89D2\u300D\u82F1\u5B57\u3092\u300C\u5168\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('R'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "n"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u5168\u89D2\u300D\u6570\u5B57\u3092\u300C\u534A\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('n'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "N"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u534A\u89D2\u300D\u6570\u5B57\u3092\u300C\u5168\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('N'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "a"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u5168\u89D2\u300D\u82F1\u6570\u5B57\u3092\u300C\u534A\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('a'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "A"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u534A\u89D2\u300D\u82F1\u6570\u5B57\u3092\u300C\u5168\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('A'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "s"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u5168\u89D2\u300D\u30B9\u30DA\u30FC\u30B9\u3092\u300C\u534A\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\uFF08U+3000 -> U+0020\uFF09\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('s'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "S"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u534A\u89D2\u300D\u30B9\u30DA\u30FC\u30B9\u3092\u300C\u5168\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\uFF08U+0020 -> U+3000\uFF09\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('S'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "k"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u5168\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u3092\u300C\u534A\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('k'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "K"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u534A\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u3092\u300C\u5168\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('K'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "h"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u5168\u89D2\u3072\u3089\u304C\u306A\u300D\u3092\u300C\u534A\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('h'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "H"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u534A\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u3092\u300C\u5168\u89D2\u3072\u3089\u304C\u306A\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('H'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "c"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u5168\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u3092\u300C\u5168\u89D2\u3072\u3089\u304C\u306A\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('c'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "C"), /*#__PURE__*/_react.default.createElement("td", null, "\u300C\u5168\u89D2\u3072\u3089\u304C\u306A\u300D\u3092\u300C\u5168\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('C'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "V"), /*#__PURE__*/_react.default.createElement("td", null, "\u6FC1\u70B9\u4ED8\u304D\u306E\u6587\u5B57\u3092\u4E00\u6587\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\"K\", \"H\" \u3068\u5171\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"), /*#__PURE__*/_react.default.createElement("td", null, renderButton('V')))))));
}