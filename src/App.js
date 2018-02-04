import React, { Component } from 'react';
import UserInput from './components/UserInput';
import {ConnectedUsers, Users} from './components/Users';

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

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default App;
