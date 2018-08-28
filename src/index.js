import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import manageUsers from './reducers/manageUsers'

const store = createStore(
  manageUsers, 
  window.__REDUX_DEVTOOLS_EXTENTION__&& 
  window.__REDUX_DEVTOOLS_EXTENTION__()
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
