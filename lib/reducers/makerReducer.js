'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makerReducer = makerReducer;
const initialState = {
  customfield: [],
  fieldgroup: {
    items: [],
    title: null,
    name: null,
  },
  customunit: [],
  unitgroup: {
    items: [],
    title: null,
    name: null,
  },
  history: {
    customfield: [],
    fieldgroup: [],
    customunit: [],
    unitgroup: [],
  },
  currentIndex: {
    customfield: -1,
    fieldgroup: -1,
    customunit: -1,
    unitgroup: -1,
  },
};
function makerReducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'UPDATE_STATE': {
      const newState = {
        ...state,
        customfield: action.payload.customfield || state.customfield,
        fieldgroup: action.payload.fieldgroup || state.fieldgroup,
        customunit: action.payload.customunit || state.customunit,
        unitgroup: action.payload.unitgroup || state.unitgroup,
      };
      const updatedHistory = {};
      const updatedCurrentIndex = {};
      ['customfield', 'fieldgroup', 'customunit', 'unitgroup'].forEach((key) => {
        if (JSON.stringify(state[key]) !== JSON.stringify(newState[key])) {
          updatedHistory[key] = [...state.history[key].slice(0, state.currentIndex[key] + 1), newState[key]];
          updatedCurrentIndex[key] = state.currentIndex[key] + 1;
        } else {
          updatedHistory[key] = state.history[key];
          updatedCurrentIndex[key] = state.currentIndex[key];
        }
      });
      return {
        ...newState,
        history: {
          ...state.history,
          ...updatedHistory,
        },
        currentIndex: {
          ...state.currentIndex,
          ...updatedCurrentIndex,
        },
      };
    }
    case 'UNDO': {
      var _action$payload;
      const target =
        ((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.target) ||
        'customfield';
      if (state.currentIndex[target] > 0) {
        const prevState = state.history[target][state.currentIndex[target] - 1];
        if (target === 'fieldgroup' || target === 'unitgroup') {
          if (prevState.items.length <= state[target].items.length) {
            return {
              ...state,
              [target]: prevState,
              currentIndex: {
                ...state.currentIndex,
                [target]: state.currentIndex[target] - 1,
              },
            };
          }
        } else {
          if (prevState.length <= state[target].length) {
            return {
              ...state,
              [target]: prevState,
              currentIndex: {
                ...state.currentIndex,
                [target]: state.currentIndex[target] - 1,
              },
            };
          }
        }
      }
      return state;
    }
    case 'REDO': {
      var _action$payload2;
      const target =
        ((_action$payload2 = action.payload) === null || _action$payload2 === void 0
          ? void 0
          : _action$payload2.target) || 'customfield';
      if (state.currentIndex[target] < state.history[target].length - 1) {
        const nextState = state.history[target][state.currentIndex[target] + 1];
        if (target === 'fieldgroup' || target === 'unitgroup') {
          if (nextState.items.length >= state[target].items.length) {
            return {
              ...state,
              [target]: nextState,
              currentIndex: {
                ...state.currentIndex,
                [target]: state.currentIndex[target] + 1,
              },
            };
          }
        } else {
          if (nextState.length >= state[target].length) {
            return {
              ...state,
              [target]: nextState,
              currentIndex: {
                ...state.currentIndex,
                [target]: state.currentIndex[target] + 1,
              },
            };
          }
        }
      }
      return state;
    }
    default:
      return state;
  }
}
