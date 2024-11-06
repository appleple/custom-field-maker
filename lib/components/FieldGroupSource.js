"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldGroupSource = FieldGroupSource;
var _react = _interopRequireWildcard(require("react"));
var _GroupSection = require("./layouts/GroupSection");
var _GroupTableLayout = require("./layouts/GroupTableLayout");
var _MakerContext = require("../store/MakerContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function FieldGroupSource() {
  const {
    preview: {
      tag
    }
  } = (0, _MakerContext.useMakerContext)();
  const currentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    var _window$ACMS;
    if ((_window$ACMS = window.ACMS) !== null && _window$ACMS !== void 0 && _window$ACMS.dispatchEvent && currentRef.current) {
      window.ACMS.dispatchEvent('acmsCustomFieldMakerPreview', currentRef.current, {
        item: currentRef.current
      });
    }
  }, [tag]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, tag === 'section' && /*#__PURE__*/_react.default.createElement(_GroupSection.GroupSection, {
    ref: currentRef
  }), tag === 'table' && /*#__PURE__*/_react.default.createElement(_GroupTableLayout.GroupTableLayout, {
    ref: currentRef
  }));
}