import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from 'redux';

import manageUsers from './reducers/manageUsers'


let store = createStore(manageUsers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
