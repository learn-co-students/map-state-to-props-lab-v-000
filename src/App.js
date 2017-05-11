import React, { Component } from 'react';
import { ConnectedUsers } from './components/Users';
import UserInput from './components/UserInput';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <ConnectedUsers />
      </div>
    );
  }
}

export default App;
