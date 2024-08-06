import React, { useContext, createContext, useState, useMemo, useCallback } from 'react';

const defaultCustomfield = [];
const defaultFieldgroup = { items: [], title: null, name: null };
const defaultCustomunit = [];
const defaultUnitgroup = { items: [], title: null, name: null };
const defaultPreview = {
  mode: 'normal',
  editMode: 'source',
  tag: 'section',
  acmscss: true,
  jsValidator: false,
  direction: 'horizontal',
};
const defaultClipboard = {
  source: '',
  copied: false,
};

export const MakerContext = createContext({
  customfield: defaultCustomfield,
  fieldgroup: defaultFieldgroup,
  customunit: defaultCustomunit,
  unitgroup: defaultUnitgroup,
  preview: defaultPreview,
  clipboard: defaultClipboard,
  addCustomfield: () => {},
  addCustomunit: () => {},
  setGroupTitleName: () => {},
  addGroupItem: () => {},
  setUnitGroupTitleName: () => {},
  addUnitGroupItem: () => {},
  clearCustomfield: () => {},
  clearGroupItem: () => {},
  clearCustomunit: () => {},
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
  clipboard: clipboardProp = defaultClipboard,
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

  const [customfield, setCustomfield] = useState(customfieldProp);
  const [fieldgroup, setGroup] = useState(fieldgroupProp);
  const [customunit, setCustomunit] = useState(customunitProp);
  const [unitgroup, setUnitgroup] = useState(unitgroupProp);
  const [preview, setPreview] = useState(previewProp);
  const [clipboard, setClipboard] = useState(clipboardProp);

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

  const clearCustomfield = useCallback(() => setCustomfield([]), [setCustomfield]);
  const clearGroupItem = useCallback(() => setGroup((prevState) => ({ ...prevState, items: [] })), [setGroup]);
  const clearCustomunit = useCallback(() => setCustomunit([]), [setCustomunit]);
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
  const setMode = useCallback((mode) => setPreview((prevState) => ({ ...prevState, mode })), [setPreview]);
  const setEditMode = useCallback((editMode) => setPreview((prevState) => ({ ...prevState, editMode })), [setPreview]);

  const setSource = useCallback((source) => setClipboard((prevState) => ({ ...prevState, source })), [setClipboard]);
  const setCopied = useCallback((copied) => setClipboard((prevState) => ({ ...prevState, copied })), [setClipboard]);

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
      clipboard,
      addCustomfield,
      addCustomunit,
      setGroupTitleName,
      addGroupItem,
      setUnitGroupTitleName,
      addUnitGroupItem,
      clearCustomfield,
      clearGroupItem,
      clearCustomunit,
      clearUnitGroupItem,
      setMode,
      setEditMode,
      setTag,
      setAcmscss,
      setJsValidator,
      setSource,
      setCopied,
    }),
    [
      customfield,
      fieldgroup,
      customunit,
      unitgroup,
      preview,
      clipboard,
      addCustomfield,
      addCustomunit,
      setGroupTitleName,
      addGroupItem,
      setUnitGroupTitleName,
      addUnitGroupItem,
      clearCustomfield,
      clearGroupItem,
      clearCustomunit,
      clearUnitGroupItem,
      setMode,
      setEditMode,
      setTag,
      setAcmscss,
      setJsValidator,
      setSource,
      setCopied,
    ]
  );

  return <MakerContext.Provider value={value}>{children}</MakerContext.Provider>;
}

export const useMakerContext = () => useContext(MakerContext);
