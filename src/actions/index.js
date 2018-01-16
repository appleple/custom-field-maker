import * as types from '../constants/action-types';

export const addCustomfield = (item) => ({ type: types.ADDCUSTOMFIELD, item });
export const addGroupItem = (item) => ({ type: types.ADDGROUPITEM, item });
export const setGroupTitleName = ({groupTitle, groupName}) => ({ type: types.SETGROUPTITLENAME, groupTitle, groupName });
export const addCustomUnit = (item) => ({ type: types.ADDCUSTOMUNIT, item });
export const clearCustomfield = () => ({ type: types.CLEARCUSTOMFIELD });
export const clearGroupItem = () => ({ type: types.CLEARGROUPITEM });
export const clearCustomUnit = () => ({ type: types.CLEARCUSTOMUNIT });
export const restore = (storage) => ({ type: types.RESTORE, storage });
