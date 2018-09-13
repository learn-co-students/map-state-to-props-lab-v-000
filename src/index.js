import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import App from './App'

import manageUsers from './reducers/manageUsers'


const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
