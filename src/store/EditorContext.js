import React, { useContext, createContext, useState } from 'react';

const initialState = {
  mode: 'normal',
  editMode: 'source',
  source: '',
  copied: false,
};

export const EditorContext = createContext({});

export function EditorContextProvider({ children }) {
  const [editor, setEditor] = useState(initialState);

  const setEditorState = (newEditorState) => setEditor({ ...newEditorState });
  const setSource = (source) => setEditor((prevState) => ({ ...prevState, source }));
  const setMode = (mode) => setEditor((prevState) => ({ ...prevState, mode }));
  const setEditMode = (editMode) => setEditor((prevState) => ({ ...prevState, editMode }));

  return (
    <EditorContext.Provider
      value={{
        editor,
        setEditorState,
        setSource,
        setMode,
        setEditMode,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export const useEditorContext = () => useContext(EditorContext);
