import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers'


// add imports and code
export function configureStore(){
  return createStore( manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

ReactDOM.render(
  // add imports and code
  <Provider store={configureStore()} >
  <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
