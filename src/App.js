import React, { Component } from 'react';
import UserInput from './components/UserInput';
import Users from './components/Users'
import { ConnectedUsers } from './components/Users'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}

export default App;
