"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reducers = _interopRequireDefault(require("./reducers"));

var _containers = _interopRequireDefault(require("./containers"));

var _constants = require("./constants");

var store = (0, _redux.createStore)(_reducers.default);
store.subscribe(function () {
  var state = store.getState();
  localStorage.setItem(_constants.STORAGENAME, JSON.stringify(state));
});

var _default = function _default() {
  return _react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_containers.default, null));
};

exports.default = _default;