import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import manageUsers from './reducers/manageUsers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(
	manageUsers,
	/* access the browser to find the redux-devtool extension and */
    /* execute it so that the application can communicate with it */
    /* https://github.com/zalmoxisus/redux-devtools-extension */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  // Provider ensures that the entire React application 
  // can potentially access data from the store
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)
