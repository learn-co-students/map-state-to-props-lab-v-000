import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import manageUsers from './reducers/manageUsers';

// The store will be an array of user object, each with a 
// username and hometown property. This is defined in the
// reducer manageUsers.js
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
