import React, { useContext, createContext, useState } from 'react';

export const MakerContext = createContext({})

export function MakerContextProvider({ children }) {
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
  const [customfield, setCustomfield] = useState([])
  const [fieldgroup, setGroup] = useState({ items: [], title: null, name: null })
  const [customunit, setCustomunit] = useState([])
  const [unitgroup, setUnitgroup] = useState({ items:[], title: null, name: null })
  const [snippets, setSnippets] = useState([])
  const [preview, setPreview] = useState({
    mode: 'normal',
    editMode: 'source',
    source: '',
    copied: false,
    tag: 'section',
    acmscss: true,
    jsValidator: false,
    direction: 'horizontal'
  })

  // const setMakerState = (newState) => setMaker({ ...newState })
  const addCustomfield = (newCustomfield) => setCustomfield(prevState => ([ ...prevState, newCustomfield ]))
  const addCustomunit = (newCustomunit) => setCustomunit(prevState => ([ ...prevState, newCustomunit ]))

  const setGroupTitleName = (title, name) => setGroup(prevState => ({ ...prevState, title, name }));
  const addGroupItem =(newGroupItem) => setGroup(prevState => ({ ...prevState, items: [...prevState.items, newGroupItem] }));

  const setUnitGroupTitleName = (title, name) => setUnitgroup(prevState => ({ ...prevState, title, name }));
  const addUnitGroupItem =(newGroupItem) => setUnitgroup(prevState => ({ ...prevState, items: [...prevState.items, newGroupItem] }));

  const clearGroupItem = () => setGroup(prevState => ({ ...prevState, items: [] }))
  const clearUnitGroupItem = () => setUnitgroup(prevState => ({ ...prevState, items: [] }))

  const setTag = (tag) => setPreview(prevState => ({ ...prevState, tag }));
  const setAcmscss = (acmscss) => setPreview(prevState => ({ ...prevState, acmscss }));
  const setJsValidator = (jsValidator) => setPreview(prevState => ({ ...prevState, jsValidator }));
  const setSource = (source) => setPreview((prevState) => ({ ...prevState, source }));
  const setMode = (mode) => setPreview((prevState) => ({ ...prevState, mode }));
  const setEditMode = (editMode) => setPreview((prevState) => ({ ...prevState, editMode }));


  // const clearCustomfield = () => ({ type: types.CLEARCUSTOMFIELD });
  // const clearCustomUnit = () => ({ type: types.CLEARCUSTOMUNIT });
  // const clearUnitGroupTitleName = () => ({ type: types.CLEARUNITGROUPTITLENAME });
  // const restore = (storage) => ({ type: types.RESTORE, storage });
  // const addSnippet = (name, value) => ({ type: types.ADDSNIPPET, name, value });
  // const changeDirection = (direction) => ({ type: types.CHANGEDIRECTION, direction });

  return (
    <MakerContext.Provider
      value={{
        customfield,
        fieldgroup,
        customunit,
        snippets,
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
        setSnippets
      }}>
      {children}
    </MakerContext.Provider>
  );
}

export const useMakerContext = () => useContext(MakerContext)
