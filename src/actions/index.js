import * as types from '../constants/action-types';

export const setState = (state) => ({ type: types.SETSTATE, state });
export const addCustomfield = (item) => ({ type: types.ADDCUSTOMFIELD, item });
export const addGroupItem = (item) => ({ type: types.ADDGROUPITEM, item });
export const setGroupTitleName = ({groupTitle, groupName}) => ({ type: types.SETGROUPTITLENAME, groupTitle, groupName });
export const addCustomUnit = (item) => ({ type: types.ADDCUSTOMUNIT, item });
export const addUnitGroupItem = (item) => ({ type: types.ADDUNITGROUPITEM, item });
export const setUnitGroupTitleName = ({unitGroupTitle, unitGroupName}) => ({type: types.SETUNITGROUPTITLENAME, unitGroupTitle, unitGroupName});
export const clearCustomfield = () => ({ type: types.CLEARCUSTOMFIELD });
export const clearGroupItem = () => ({ type: types.CLEARGROUPITEM });
export const clearCustomUnit = () => ({ type: types.CLEARCUSTOMUNIT });
export const clearUnitGroupItem = () => ({ type: types.CLEARUNITGROUPITEM });
export const clearUnitGroupTitleName = () => ({ type: types.CLEARUNITGROUPTITLENAME });
export const toggleAcmsCss = () => ({ type: types.TOGGLEACMSCSS });
export const toggleJsValidator = () => ({ type: types.TOGGLEJSVALIDATOR });
export const restore = (storage) => ({ type: types.RESTORE, storage });
export const addSnippet = (name, value) => ({ type: types.ADDSNIPPET, name, value });
export const changeDirection = (direction) => ({ type: types.CHANGEDIRECTION, direction });
