import React, { Component } from 'react';
import UserInput from './components/UserInput'
import { ConnectedUsers } from './components/Users'

export class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'ADD_USER'
    });
  }

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
