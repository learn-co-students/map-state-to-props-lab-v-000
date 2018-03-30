import React, { Component } from 'react';
import UserInput from './components/UserInput'
import { connect } from 'react-redux';
import { ConnectedUsers } from './components/Users';


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
  return { bands: state.bands }
}

export default App;

connect(mapStateToProps)(App)