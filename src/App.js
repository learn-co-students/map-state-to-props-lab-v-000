import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from './components/UserInput';
import ConnectedUsers from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(App);
