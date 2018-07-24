import React, { Component } from 'react';
import UserInput from './components/UserInput';
import { ConnectedUsers } from './components/Users';
import { connect } from 'react-redux'; /* code change */

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <ConnectedUsers />
{/*  something*/}
      </div>
    );
  }
}

 
export default App;
