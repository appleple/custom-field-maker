"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalDialog = ModalDialog;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ModalDialog(props) {
  const {
    children,
    title,
    open,
    onClose = () => {}
  } = props;
  const [show, setShow] = (0, _react.useState)(false);
  const hideDialog = (0, _react.useCallback)(() => {
    setShow(false);
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 300);
    }
  }, [setShow, onClose]);
  (0, _react.useEffect)(() => {
    if (open) {
      setTimeout(() => {
        setShow(true);
      }, 1);
    } else {
      hideDialog();
    }
  }, [open, hideDialog]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('acms-admin-modal', {
      in: show
    }),
    id: "converter",
    "aria-hidden": show ? 'false' : 'true',
    style: {
      display: show ? 'block' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-modal-dialog"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-modal-header"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-modal-hide acms-admin-icon-delete",
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        hideDialog();
      }
    },
    onClick: hideDialog,
    role: "button",
    tabIndex: 0
  }), /*#__PURE__*/_react.default.createElement("h3", null, title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-modal-body"
  }, children))));
}