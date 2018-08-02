import React, { Component } from 'react';
import {ConnectedUsers} from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ConnectedUsers store={this.props.store} />
      </div>
    );
  }
}

export default App;
