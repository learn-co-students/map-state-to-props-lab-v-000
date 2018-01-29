import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from './components/UserInput'
import Users from './components/Users';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <Users users={this.props.users}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

export const ConnectedApp = connect(mapStateToProps)(App);
