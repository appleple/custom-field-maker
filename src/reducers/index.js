import * as types from '../constants/action-types';

const initialState = {
  customfield: [],
  groupitems: [],
  customunit: [],
  groupTitle: null,
  groupName: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDCUSTOMFIELD:
      return Object.assign({}, state, {
        customfield: [...state.customfield, action.item]
      });
    case types.ADDGROUPITEM:
      return Object.assign({}, state, {
        groupitems: [...state.groupitems, action.item]
      })
    case types.SETGROUPTITLENAME:
      return Object.assign({}, state, {
        groupTitle: action.groupTitle,
        groupName: action.groupName
      });
    case types.ADDCUSTOMUNIT:
      return Object.assign({}, state, {
        customunit: [...state.customunit, action.item]
      });
    default:
      return state;
  }
}