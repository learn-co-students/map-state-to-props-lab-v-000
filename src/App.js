import React, { Component } from 'react';
import UserInput from './components/UserInput'
import Users from './components/Users'
import {connect} from 'react-redux';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <Users store={this.props.store}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { users: state.users };
};
 
export default connect(mapStateToProps)(App);
