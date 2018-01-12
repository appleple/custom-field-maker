import * as types from '../constants/action-types';

const initialState = {
  customfield: [],
  groupitems: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDCUSTOMFIELD:
      return Object.assign({}, state, {
        customfield: [...state.customfield, action.item]
      });
    case types.ADDGROUPITEM:
      return Object.assign({}, state, {
        customfield: [...state.groupitems, action.item]
      })
    default:
      return state;
  }
}