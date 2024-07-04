import React from 'react';
import CustomFieldMaker from './containers';
import { MakerContextProvider } from './store/MakerContext';

function App() {
  return (
    <MakerContextProvider>
      <CustomFieldMaker />
    </MakerContextProvider>
  );
}

export default App
