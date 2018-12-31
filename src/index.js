import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import manageUsers from './reducers/manageUsers';
import { Provider } from 'react-redux';

// add imports and code
const store = createStore(
    manageUsers, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App store={store}/>
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
