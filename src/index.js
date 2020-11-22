import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './App'
import manageUsers from './reducers/manageUsers'
// import './index.css';

// add imports and code

// here, createStore allows us to create a store that we can pass to our components via Provider.
// it calls on our reducer function- in the managUsers file- to create the store. The rest of the code simply
// gives you access to the dev tools in the browser.
// This line is triggered at the beginning, when the program runs, but also when the state changes 
const store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log("store", store)

ReactDOM.render(
  // add imports and code
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);
