import React, { Component } from 'react';

import UserInput from './components/UserInput'
import { ConnectedUsers } from './components/Users'
//when importing constants, specify it with {}
//when importing something that was export default something...
//just use the name of the class (for convention) without {}
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
