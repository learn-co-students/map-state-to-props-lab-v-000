import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//use the createStore from redux, 
import { createStore } from 'redux';
//Use Provider from react-redux to wrap <App />, 
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers'


// passing in the provided reducer, manageUsers, to create a store

const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//passing store as a prop to the Provider.
ReactDOM.render(
 
  <Provider store={store}>
    <App />
  </Provider>

  ,
  document.getElementById('root')
);
