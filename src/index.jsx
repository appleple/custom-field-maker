import React from 'react';
import CustomFieldMaker from './containers';
import { MakerContextProvider } from './stores/MakerContext';
import { STORAGENAME } from './constants';
import './assets/custom-field-maker.css';

function App() {
  const state = JSON.parse(localStorage.getItem(STORAGENAME)) || undefined;

  return (
    <MakerContextProvider state={state}>
      <CustomFieldMaker />
    </MakerContextProvider>
  );
}

export default App;
