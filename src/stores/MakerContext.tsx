import React, { useState, useContext, createContext, useReducer, useCallback, useMemo } from 'react';
import { makerReducer, MakerState } from '../reducers/makerReducer';
import { PreviewType } from '../types/preview';
import { ClipboardType } from '../types/clipboard';

const defaultCustomfield = [];
const defaultFieldgroup = { items: [], title: null, name: null };
const defaultCustomunit = [];
const defaultUnitgroup = { items: [], title: null, name: null };
const defaultPreview: PreviewType = {
  mode: 'customfield',
  editMode: 'source',
  tag: 'section',
  acmscss: true,
  jsValidator: true,
  direction: 'horizontal',
  escapeSequence: false,
};
const defaultClipboard: ClipboardType = {
  source: '',
  copied: false,
};

const initialState: MakerState = {
  customfield: defaultCustomfield,
  fieldgroup: defaultFieldgroup,
  customunit: defaultCustomunit,
  unitgroup: defaultUnitgroup,
  history: {
    customfield: [],
    fieldgroup: [],
    customunit: [],
    unitgroup: [],
  },
  currentIndex: {
    customfield: -1,
    fieldgroup: -1,
    customunit: -1,
    unitgroup: -1,
  },
};

export const MakerContext = createContext({
  state: initialState,
  preview: defaultPreview,
  clipboard: defaultClipboard,
  addCustomfield: () => {},
  addCustomunit: () => {},
  setGroupTitleName: () => {},
  addGroupItem: () => {},
  setUnitGroupTitleName: () => {},
  addUnitGroupItem: () => {},
  clearCustomfield: () => {},
  clearGroup: () => {},
  clearGroupItem: () => {},
  clearCustomunit: () => {},
  clearUnitGroup: () => {},
  clearUnitGroupItem: () => {},
  setSource: () => {},
  setMode: () => {},
  setEditMode: () => {},
  setTag: () => {},
  setAcmscss: () => {},
  setJsValidator: () => {},
  setDirection: () => {},
  setEscapeSequence: () => {},
  setCopied: () => {},
  undo: () => {},
  redo: () => {},
});

export function MakerContextProvider({
  children,
  state: stateProp = initialState,
  preview: previewProp = defaultPreview,
  clipboard: clipboardProp = defaultClipboard,
}) {
  const [state, dispatch] = useReducer(makerReducer, stateProp);
  const [preview, setPreview] = useState(previewProp);
  const [clipboard, setClipboard] = useState(clipboardProp);

  const addCustomfield = useCallback(
    (newCustomfield: unknown) =>
      dispatch({
        type: 'UPDATE_STATE',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        payload: { customfield: (prevCustomfield: any) => [...prevCustomfield, newCustomfield] },
      }),
    [dispatch]
  );

  const addCustomunit = useCallback(
    (newCustomunit: unknown) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: { customunit: [...state.customunit, newCustomunit] },
      }),
    [dispatch, state.customunit]
  );

  const setGroupTitleName = useCallback(
    (title: string, name: string) =>
      dispatch({
        type: 'UPDATE_STATE',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        payload: { fieldgroup: (prevFieldgroup: any) => ({ ...prevFieldgroup, title, name }) },
      }),
    [dispatch]
  );
  const addGroupItem = useCallback(
    (newGroupItem: unknown) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          fieldgroup: (prevFieldgroup) => ({ ...prevFieldgroup, items: [...prevFieldgroup.items, newGroupItem] }),
        },
      }),
    [dispatch]
  );

  const setUnitGroupTitleName = useCallback(
    (title: string, name: string) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: { unitgroup: { ...state.unitgroup, title, name } },
      }),
    [dispatch, state.unitgroup]
  );
  const addUnitGroupItem = useCallback(
    (newGroupItem: unknown) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: { unitgroup: { ...state.unitgroup, items: [...state.unitgroup.items, newGroupItem] } },
      }),
    [dispatch, state.unitgroup]
  );

  const clearCustomfield = useCallback(
    () => dispatch({ type: 'UPDATE_STATE', payload: { customfield: [] } }),
    [dispatch]
  );
  const clearGroup = useCallback(
    () =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: { fieldgroup: { ...state.fieldgroup, title: null, name: null, items: [] } },
      }),
    [dispatch, state.fieldgroup]
  );
  const clearGroupItem = useCallback(
    () => dispatch({ type: 'UPDATE_STATE', payload: { fieldgroup: { ...state.fieldgroup, items: [] } } }),
    [dispatch, state.fieldgroup]
  );
  const clearCustomunit = useCallback(() => {
    dispatch({ type: 'UPDATE_STATE', payload: { customunit: [] } });
  }, [dispatch]);
  const clearUnitGroup = useCallback(
    () =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: { unitgroup: { ...state.unitgroup, title: null, name: null, items: [] } },
      }),
    [dispatch, state.unitgroup]
  );
  const clearUnitGroupItem = useCallback(
    () => dispatch({ type: 'UPDATE_STATE', payload: { unitgroup: { ...state.unitgroup, items: [] } } }),
    [dispatch, state.unitgroup]
  );

  const undo = useCallback(
    (target) => {
      dispatch({ type: 'UNDO', payload: { target } });
    },
    [dispatch]
  );
  const redo = useCallback(
    (target) => {
      dispatch({ type: 'REDO', payload: { target } });
    },
    [dispatch]
  );

  const setTag = useCallback((tag) => setPreview((prevState) => ({ ...prevState, tag })), [setPreview]);
  const setAcmscss = useCallback((acmscss) => setPreview((prevState) => ({ ...prevState, acmscss })), [setPreview]);
  const setJsValidator = useCallback(
    (jsValidator) => setPreview((prevState) => ({ ...prevState, jsValidator })),
    [setPreview]
  );
  const setEscapeSequence = useCallback(
    (escapeSequence) => setPreview((prevState) => ({ ...prevState, escapeSequence })),
    [setPreview]
  );

  const setMode = useCallback((mode) => setPreview((prevState) => ({ ...prevState, mode })), [setPreview]);
  const setEditMode = useCallback((editMode) => setPreview((prevState) => ({ ...prevState, editMode })), [setPreview]);
  const setDirection = useCallback(
    (direction) => setPreview((prevState) => ({ ...prevState, direction })),
    [setPreview]
  );

  const setSource = useCallback((source) => setClipboard((prevState) => ({ ...prevState, source })), [setClipboard]);
  const setCopied = useCallback((copied) => setClipboard((prevState) => ({ ...prevState, copied })), [setClipboard]);

  const value = useMemo(
    () => ({
      state,
      preview,
      clipboard,
      addCustomfield,
      addCustomunit,
      setGroupTitleName,
      addGroupItem,
      setUnitGroupTitleName,
      addUnitGroupItem,
      clearCustomfield,
      clearGroup,
      clearGroupItem,
      clearCustomunit,
      clearUnitGroup,
      clearUnitGroupItem,
      setTag,
      setAcmscss,
      setJsValidator,
      setEscapeSequence,
      setMode,
      setEditMode,
      setDirection,
      setSource,
      setCopied,
      undo,
      redo,
    }),
    [
      state,
      preview,
      clipboard,
      addCustomfield,
      addCustomunit,
      setGroupTitleName,
      addGroupItem,
      setUnitGroupTitleName,
      addUnitGroupItem,
      clearCustomfield,
      clearGroup,
      clearUnitGroup,
      clearGroupItem,
      clearCustomunit,
      clearUnitGroupItem,
      setTag,
      setAcmscss,
      setJsValidator,
      setEscapeSequence,
      setMode,
      setEditMode,
      setDirection,
      setSource,
      setCopied,
      undo,
      redo,
    ]
  );

  {
    /* @ts-expect-error - 型の不一致を一時的に許可 */
  }
  return <MakerContext.Provider value={value}>{children}</MakerContext.Provider>;
}

export const useMakerContext = () => useContext(MakerContext);
