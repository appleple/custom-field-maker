export interface MakerState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customfield: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldgroup: { items: any[]; title: string | null; name: string | null };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customunit: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  unitgroup: { items: any[]; title: string | null; name: string | null };
  history: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customfield: any[][];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fieldgroup: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customunit: any[][];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unitgroup: any[];
  };
  currentIndex: {
    customfield: number;
    fieldgroup: number;
    customunit: number;
    unitgroup: number;
  };
}

export interface MakerAction {
  type: 'UPDATE_STATE' | 'UNDO' | 'REDO';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

const initialState: MakerState = {
  customfield: [],
  fieldgroup: { items: [], title: null, name: null },
  customunit: [],
  unitgroup: { items: [], title: null, name: null },
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

function makerReducer(state: MakerState = initialState, action: MakerAction): MakerState {
  switch (action.type) {
    case 'UPDATE_STATE': {
      const newState = { ...state };
      Object.keys(action.payload).forEach((key) => {
        if (typeof action.payload[key] === 'function') {
          newState[key as keyof MakerState] = action.payload[key](state[key as keyof MakerState]);
        } else {
          newState[key as keyof MakerState] = action.payload[key];
        }
      });

      const updatedHistory: Partial<MakerState['history']> = {};
      const updatedCurrentIndex: Partial<MakerState['currentIndex']> = {};

      (['customfield', 'fieldgroup', 'customunit', 'unitgroup'] as const).forEach((key) => {
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
        history: { ...state.history, ...updatedHistory },
        currentIndex: { ...state.currentIndex, ...updatedCurrentIndex },
      };
    }

    case 'UNDO': {
      const target = action.payload?.target || 'customfield';
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
      const target = action.payload?.target || 'customfield';
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

export { makerReducer };
