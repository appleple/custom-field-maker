import CustomFieldMaker from './containers';
import { MakerContextProvider } from './stores/MakerContext';
import { STORAGENAME } from './constants';
import './assets/custom-field-maker.css';

function App() {
  const savedData = JSON.parse(localStorage.getItem(STORAGENAME)) || {};
  const state = savedData.state || undefined;
  const preview = savedData.preview || undefined;

  return (
    <MakerContextProvider state={state} preview={preview}>
      <CustomFieldMaker />
    </MakerContextProvider>
  );
}

export default App;
