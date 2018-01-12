import { render } from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import CustomFieldMaker from './containers';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <CustomFieldMaker />
  </Provider>,
  document.getElementById('app'),
);