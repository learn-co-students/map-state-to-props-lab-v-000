import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers';
import App from './App'




// add imports and code
let store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render(
  // add imports and code
  <Provider store={store}>
  	<App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
