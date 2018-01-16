import * as types from '../constants/action-types';

const initialState = {
  customfield: [],
  groupitems: [],
  customunit: [],
  groupTitle: null,
  groupName: null,
  acmscss: true
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
    case types.CLEARCUSTOMFIELD:
      return Object.assign({}, state, {
        customfield: []
      });
    case types.CLEARGROUPITEM:
      return Object.assign({}, state, {
        groupitems: []
      });
    case types.CLEARCUSTOMUNIT:
      return Object.assign({}, state, {
        customunit: []
      })
    case types.RESTORE:
      return Object.assign({}, state, action.storage);
    case types.TOGGLEACMSCSS:
      return Object.assign({}, state, {
        acmscss: !state.acmscss
      });
    default:
      return state;
  }
}