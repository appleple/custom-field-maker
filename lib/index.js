'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _containers = require('./containers');

var _containers2 = _interopRequireDefault(_containers);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

store.subscribe(function () {
  localStorage.setItem(_constants.STORAGENAME, (0, _stringify2.default)(store.getState()));
});

exports.default = function () {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_containers2.default, null)
  );
};