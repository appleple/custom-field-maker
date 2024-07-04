"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _containers = _interopRequireDefault(require("./containers"));
var _MakerContext = require("./store/MakerContext");
function App() {
  return /*#__PURE__*/_react.default.createElement(_MakerContext.MakerContextProvider, null, /*#__PURE__*/_react.default.createElement(_containers.default, null));
}
var _default = exports.default = App;