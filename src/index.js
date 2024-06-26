import React from 'react';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers';
import CustomFieldMaker from './containers';
import { STORAGENAME } from './constants';

const store = createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(STORAGENAME, JSON.stringify(state));
});

export default () => {
return (
  <Provider store={store}>
    <CustomFieldMaker />
<<<<<<< HEAD
  </Provider>);
=======
  </Provider>
  );
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
}
