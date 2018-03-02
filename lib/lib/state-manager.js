'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _clone = require('clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StateManager = function () {
  function StateManager() {
    (0, _classCallCheck3.default)(this, StateManager);

    this.stackPosition = 0;
    this.stack = [];
  }

  (0, _createClass3.default)(StateManager, [{
    key: 'pushState',
    value: function pushState(state) {
      this.stack = this.stack.slice(0, this.stackPosition + 1);
      this.stack.push((0, _clone2.default)(state));
      this.stackPosition++;
    }
  }, {
    key: 'redo',
    value: function redo() {
      if (!this.canRedo()) {
        return;
      }
      this.stackPosition++;
      return (0, _clone2.default)(this.stack[this.stackPosition]);
    }
  }, {
    key: 'canRedo',
    value: function canRedo() {
      if (this.stackPosition < this.stack.length - 1) {
        return true;
      }
      return false;
    }
  }, {
    key: 'undo',
    value: function undo() {
      if (!this.canUndo()) {
        return;
      }
      this.stackPosition--;
      return (0, _clone2.default)(this.stack[this.stackPosition - 1]);
    }
  }, {
    key: 'canUndo',
    value: function canUndo() {
      if (this.stackPosition > 0) {
        return true;
      }
      return false;
    }
  }]);
  return StateManager;
}();

exports.default = StateManager;