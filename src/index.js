import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import manageUsers from './reducers/manageUsers'

const store = createStore(manageUsers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
