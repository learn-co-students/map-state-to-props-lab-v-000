import React, { Component } from 'react';
import UserInput from './components/UserInput'
import { connect } from 'react-redux';
import { ConnectedUsers } from './components/Users'

export class App extends Component {
  render() {
    console.log("store", this.props.store)
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
         <ConnectedUsers />
      </div>
    );
  }
}

export default App