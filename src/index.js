import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import manageUsers from './reducers/manageUsers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import './index.css';
import UserInput from './components/UserInput';

              

const store = createStore(
  manageUsers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);

