"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _clone = _interopRequireDefault(require("clone"));

var StateManager =
/*#__PURE__*/
function () {
  function StateManager() {
    (0, _classCallCheck2.default)(this, StateManager);
    this.stackPosition = 0;
    this.stack = [];
  }

  (0, _createClass2.default)(StateManager, [{
    key: "pushState",
    value: function pushState(state) {
      this.stack = this.stack.slice(0, this.stackPosition + 1);
      this.stack.push((0, _clone.default)(state));
      this.stackPosition++;
    }
  }, {
    key: "redo",
    value: function redo() {
      if (!this.canRedo()) {
        return;
      }

      this.stackPosition++;
      return (0, _clone.default)(this.stack[this.stackPosition]);
    }
  }, {
    key: "canRedo",
    value: function canRedo() {
      if (this.stackPosition < this.stack.length - 1) {
        return true;
      }

      return false;
    }
  }, {
    key: "undo",
    value: function undo() {
      if (!this.canUndo()) {
        return;
      }

      this.stackPosition--;
      return (0, _clone.default)(this.stack[this.stackPosition - 1]);
    }
  }, {
    key: "canUndo",
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