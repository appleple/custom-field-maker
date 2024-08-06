'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _clone = _interopRequireDefault(require('clone'));
class StateManager {
  constructor() {
    this.stackPosition = 0;
    this.stack = [];
  }
  pushState(state) {
    this.stack = this.stack.slice(0, this.stackPosition + 1);
    this.stack.push((0, _clone.default)(state));
    this.stackPosition++;
  }
  redo() {
    if (!this.canRedo()) {
      return;
    }
    this.stackPosition++;
    return (0, _clone.default)(this.stack[this.stackPosition]);
  }
  canRedo() {
    if (this.stackPosition < this.stack.length - 1) {
      return true;
    }
    return false;
  }
  undo() {
    if (!this.canUndo()) {
      return;
    }
    this.stackPosition--;
    return (0, _clone.default)(this.stack[this.stackPosition - 1]);
  }
  canUndo() {
    if (this.stackPosition > 0) {
      return true;
    }
    return false;
  }
}
exports.default = StateManager;
