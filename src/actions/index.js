import * as types from '../constants/action-types';

export const addCustomfield = (item) => ({ type: types.ADDCUSTOMFIELD, item });
export const addGroupItem = (item) => ({ type: types.ADDGROUPITEM, item });
export const setGroupTitleName = ({groupTitle, groupName}) => ({ type: types.SETGROUPTITLENAME, groupTitle, groupName });
