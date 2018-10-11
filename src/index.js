import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App'
import manageUsers from './reducers/manageUsers'

// add imports and code
const store = createStore(
  // In src/index.js, use the createStore from redux, passing in the provided reducer, manageUsers,
  // to create a store.
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
// Use Provider from react-redux to wrap <App />, passing store as a prop to
// the Provider. This will give your components access to the store.
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
