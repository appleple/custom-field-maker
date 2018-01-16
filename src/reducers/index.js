import * as types from '../constants/action-types';

const initialState = {
  customfield: [],
  groupitems: [],
  customunit: [],
  unitgroupitems: [],
  snippets: [],
  groupTitle: null,
  groupName: null,
  unitGroupTitle: null,
  unitGroupName: null,
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
    case types.SETUNITGROUPTITLENAME:
      return Object.assign({}, state, {
        unitGroupTitle: action.unitGroupTitle,
        unitGroupName: action.unitGroupName
      });
    case types.ADDCUSTOMUNIT:
      return Object.assign({}, state, {
        customunit: [...state.customunit, action.item]
      });
    case types.ADDUNITGROUPITEM:
      return Object.assign({}, state, {
        unitgroupitems: [...state.unitgroupitems, action.item]
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
      });
    case types.CLEARUNITGROUPITEM:
      return Object.assign({}, state, {
        unitgroupitems: []
      });
    case types.RESTORE:
      return Object.assign({}, state, action.storage);
    case types.TOGGLEACMSCSS:
      return Object.assign({}, state, {
        acmscss: !state.acmscss
      });
    case types.ADDSNIPPET:
      return Object.assign({}, state, {
        snippets: [...state.snippets, {
          name: action.name,
          value: action.value
        }]
      });
    default:
      return state;
  }
}