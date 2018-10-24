import React, { Component } from 'react';
import UserInput from './components/UserInput'
import ConnectedUsers from './components/Users'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}


