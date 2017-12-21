import React, { Component } from 'react';
import UserInput from './components/UserInput';
import { ConnectedUsers } from './components/Users'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store} />
        <ConnectedUsers users={this.props.users} />
      </div>
    );
  }
}

export default App;
