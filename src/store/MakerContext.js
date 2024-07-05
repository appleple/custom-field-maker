import React, { useContext, createContext, useState, useMemo, useCallback } from 'react';

const defaultCustomfield = [];
const defaultFieldgroup = { items: [], title: null, name: null };
const defaultCustomunit = [];
const defaultUnitgroup = { items: [], title: null, name: null };
const defaultPreview = {
  mode: 'normal',
  editMode: 'source',
  source: '',
  copied: false,
  tag: 'section',
  acmscss: true,
  jsValidator: false,
  direction: 'horizontal',
};

export const MakerContext = createContext({
  customfield: defaultCustomfield,
  fieldgroup: defaultFieldgroup,
  customunit: defaultCustomunit,
  unitgroup: defaultUnitgroup,
  preview: defaultPreview,
  addCustomfield: () => {},
  addCustomunit: () => {},
  setGroupTitleName: () => {},
  addGroupItem: () => {},
  setUnitGroupTitleName: () => {},
  addUnitGroupItem: () => {},
  clearGroupItem: () => {},
  clearUnitGroupItem: () => {},
  setSource: () => {},
  setMode: () => {},
  setEditMode: () => {},
  setTag: () => {},
  setAcmscss: () => {},
  setJsValidator: () => {},
});

export function MakerContextProvider({
  children,
  customfield: customfieldProp = defaultCustomfield,
  fieldgroup: fieldgroupProp = defaultFieldgroup,
  customunit: customunitProp = defaultCustomunit,
  unitgroup: unitgroupProp = defaultUnitgroup,
  preview: previewProp = defaultPreview,
}) {
  // const initialState = {
  //   customfield: [],
  //   groupitems: [],
  //   customunit: [],
  //   unitgroupitems: [],
  //   snippets: [],
  //   groupTitle: null,
  //   groupName: null,
  //   unitGroupTitle: null,
  //   unitGroupName: null,
  //   tag: 'section',
  //   acmscss: true,
  //   jsValidator: false,
  //   direction: 'horizontal'
  // }

  // const [maker, setMaker] = useState(initialState)
  const [customfield, setCustomfield] = useState(customfieldProp);
  const [fieldgroup, setGroup] = useState(fieldgroupProp);
  const [customunit, setCustomunit] = useState(customunitProp);
  const [unitgroup, setUnitgroup] = useState(unitgroupProp);
  const [preview, setPreview] = useState(previewProp);

  // const setMakerState = (newState) => setMaker({ ...newState })
  const addCustomfield = useCallback(
    (newCustomfield) => setCustomfield((prevState) => [...prevState, newCustomfield]),
    [setCustomfield]
  );
  const addCustomunit = useCallback(
    (newCustomunit) => setCustomunit((prevState) => [...prevState, newCustomunit]),
    [setCustomunit]
  );

  const setGroupTitleName = useCallback(
    (title, name) => setGroup((prevState) => ({ ...prevState, title, name })),
    [setGroup]
  );
  const addGroupItem = useCallback(
    (newGroupItem) => setGroup((prevState) => ({ ...prevState, items: [...prevState.items, newGroupItem] })),
    [setGroup]
  );

  const setUnitGroupTitleName = useCallback(
    (title, name) => setUnitgroup((prevState) => ({ ...prevState, title, name })),
    [setUnitgroup]
  );
  const addUnitGroupItem = useCallback(
    (newGroupItem) => setUnitgroup((prevState) => ({ ...prevState, items: [...prevState.items, newGroupItem] })),
    [setUnitgroup]
  );

  const clearGroupItem = useCallback(() => setGroup((prevState) => ({ ...prevState, items: [] })), [setGroup]);
  const clearUnitGroupItem = useCallback(
    () => setUnitgroup((prevState) => ({ ...prevState, items: [] })),
    [setUnitgroup]
  );

  const setTag = useCallback((tag) => setPreview((prevState) => ({ ...prevState, tag })), [setPreview]);
  const setAcmscss = useCallback((acmscss) => setPreview((prevState) => ({ ...prevState, acmscss })), [setPreview]);
  const setJsValidator = useCallback(
    (jsValidator) => setPreview((prevState) => ({ ...prevState, jsValidator })),
    [setPreview]
  );
  const setSource = useCallback((source) => setPreview((prevState) => ({ ...prevState, source })), [setPreview]);
  const setMode = useCallback((mode) => setPreview((prevState) => ({ ...prevState, mode })), [setPreview]);
  const setEditMode = useCallback((editMode) => setPreview((prevState) => ({ ...prevState, editMode })), [setPreview]);

  // const clearCustomfield = () => ({ type: types.CLEARCUSTOMFIELD });
  // const clearCustomUnit = () => ({ type: types.CLEARCUSTOMUNIT });
  // const clearUnitGroupTitleName = () => ({ type: types.CLEARUNITGROUPTITLENAME });
  // const restore = (storage) => ({ type: types.RESTORE, storage });
  // const addSnippet = (name, value) => ({ type: types.ADDSNIPPET, name, value });
  // const changeDirection = (direction) => ({ type: types.CHANGEDIRECTION, direction });

  const value = useMemo(
    () => ({
      customfield,
      fieldgroup,
      customunit,
      unitgroup,
      preview,
      addCustomfield,
      addCustomunit,
      setGroupTitleName,
      addGroupItem,
      setUnitGroupTitleName,
      addUnitGroupItem,
      clearGroupItem,
      clearUnitGroupItem,
      setSource,
      setMode,
      setEditMode,
      setTag,
      setAcmscss,
      setJsValidator,
    }),
    [
      customfield,
      fieldgroup,
      customunit,
      unitgroup,
      preview,
      addCustomfield,
      addCustomunit,
      setGroupTitleName,
      addGroupItem,
      setUnitGroupTitleName,
      addUnitGroupItem,
      clearGroupItem,
      clearUnitGroupItem,
      setSource,
      setMode,
      setEditMode,
      setTag,
      setAcmscss,
      setJsValidator,
    ]
  );

  return <MakerContext.Provider value={value}>{children}</MakerContext.Provider>;
}

export const useMakerContext = () => useContext(MakerContext);
