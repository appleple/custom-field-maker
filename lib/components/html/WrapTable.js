"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapTable = WrapTable;
var _react = _interopRequireDefault(require("react"));
var _MakerContext = require("../../store/MakerContext");
function WrapTable(props) {
  const {
    children,
    title
  } = props;
  const {
    preview: {
      direction
    }
  } = (0, _MakerContext.useMakerContext)();
  const ConditionalWrap = _ref => {
    let {
      condition,
      wrap,
      children
    } = _ref;
    return condition ? wrap(children) : children;
  };
  return /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
    condition: direction === 'vertical',
    wrap: children => {
      return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, title), children);
    }
  }, children);
}