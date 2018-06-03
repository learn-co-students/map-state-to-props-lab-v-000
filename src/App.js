import React, { Component } from 'react';
import UserInput from './components/UserInput'
import {ConnectedUsers} from './components/Users'

export class App extends Component {
  
  componentDidMount(){
    return this.props.store.getState()
  }

  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <ConnectedUsers store={this.props.store} />
      </div>
    );
  }
}

export default App;
