import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import manageUsers from './reducers/manageUsers'

let store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// add imports and code


ReactDOM.render(
  <Provider store={store}>
  // add imports and code
  <App />
  // add imports and code
  </Provider>
  ,
  document.getElementById('root')
);
