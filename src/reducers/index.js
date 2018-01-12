import * as types from '../constants/action-types';

const initialState = {
  customfield: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDCUSTOMFIELD:
      return Object.assign({}, state, {
        customfield: [...state.customfield, action.item]
      });
    default:
      return state;
  }
}