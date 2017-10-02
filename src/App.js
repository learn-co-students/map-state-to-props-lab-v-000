import React, { Component } from 'react';
import UserInput from './components/UserInput';
import {connect} from 'react-redux';
import {ConnectedUsers} from './components/Users';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        {connect(mapStateToProps)(App)}
        <ConnectedUsers />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

// export default connect(mapStateToProps)(App);

export default App;
