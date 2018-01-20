import { render } from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import CustomFieldMaker from './containers';
import { STORAGENAME } from './constants';
import style from './css/custom-field-maker.css';

const store = createStore(reducer);

store.subscribe(() => {
  localStorage.setItem(STORAGENAME, JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <CustomFieldMaker />
  </Provider>,
  document.getElementById('app'),
);