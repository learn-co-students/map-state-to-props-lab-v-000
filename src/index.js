import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import manageUsers from './reducers/manageUsers'


// add imports and code

const myStore = createStore(manageUsers)
ReactDOM.render(
  // add imports and code
  <Provider store={myStore}>
    <App />

  </Provider>

  // add imports and code
  ,
  document.getElementById('root')
);
