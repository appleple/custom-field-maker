import * as types from '../constants/action-types';
import stateManger from '../lib/history';

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
  acmscss: true,
  jsValidator: false,
  direction: 'horizontal'
}

const preserveState = (state) => {
  stateManger.pushState(state);
  return state;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SETSTATE:
      return action.state;
    case types.ADDCUSTOMFIELD:
      return preserveState(Object.assign({}, state, {
        customfield: [...state.customfield, action.item]
      }));
    case types.ADDGROUPITEM:
      return preserveState(Object.assign({}, state, {
        groupitems: [...state.groupitems, action.item]
      }));
    case types.SETGROUPTITLENAME:
      return preserveState(Object.assign({}, state, {
        groupTitle: action.groupTitle,
        groupName: action.groupName
      }));
    case types.SETUNITGROUPTITLENAME:
      return preserveState(Object.assign({}, state, {
        unitGroupTitle: action.unitGroupTitle,
        unitGroupName: action.unitGroupName
      }));
    case types.ADDCUSTOMUNIT:
      return preserveState(Object.assign({}, state, {
        customunit: [...state.customunit, action.item]
      }));
    case types.ADDUNITGROUPITEM:
      return preserveState(Object.assign({}, state, {
        unitgroupitems: [...state.unitgroupitems, action.item]
      }));
    case types.CLEARCUSTOMFIELD:
      return preserveState(Object.assign({}, state, {
        customfield: []
      }));
    case types.CLEARGROUPITEM:
      return preserveState(Object.assign({}, state, {
        groupitems: [],
        groupTitle: null,
        groupName: null
      }));
    case types.CLEARCUSTOMUNIT:
      return preserveState(Object.assign({}, state, {
        customunit: []
      }));
    case types.CLEARUNITGROUPITEM:
      return preserveState(Object.assign({}, state, {
        unitgroupitems: [],
        unitGroupTitle: null,
        unitGroupName: null
      }));
    case types.CLEARUNITGROUPTITLENAME:
      return preserveState(Object.assign({}, state, {
        unitGroupTitle: null,
        unitGroupName: null
      }));
    case types.RESTORE:
      return preserveState(Object.assign({}, state, action.storage));
    case types.TOGGLEACMSCSS:
      return preserveState(Object.assign({}, state, {
        acmscss: !state.acmscss
      }));
    case types.TOGGLEJSVALIDATOR:
      return preserveState(Object.assign({}, state, {
        jsValidator: !state.jsValidator
      }));
    case types.ADDSNIPPET:
      return preserveState(Object.assign({}, state, {
        snippets: [...state.snippets, {
          name: action.name,
          value: action.value
        }]
      }));
    case types.CHANGEDIRECTION:
      return preserveState(Object.assign({}, state, {
        direction: action.direction
      }));
    default:
      return state;
  }
}
