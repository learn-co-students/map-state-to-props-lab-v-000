import React, { Component } from 'react';
import UserInput from './components/UserInput';
import { connect } from 'react-redux';
import { ConnectedUsers, Users }  from './components/Users';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        {connect(mapStateToProps)(App)}
        <ConnectedUsers users={this.props.store}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default App;
