import React, { Component } from 'react';
import UserInput from './components/UserInput'
import { ConnectedUsers } from './components/Users'


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        {/* is there something we could connect to here? */}
        <ConnectedUsers />
      </div>
    );
  }
}

export default App;
