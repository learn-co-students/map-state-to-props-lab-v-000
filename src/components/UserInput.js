import React, { Component } from 'react';
import { addUser } from '../actions/users';

class UserInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      hometown: ''
    };
  }

  handleOnUserNameChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleOnHometownChange(event) {
    this.setState({
      hometown: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    this.props.store.dispatch(addUser(this.state))
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
      <p>
        <input
          type="text"
          onChange={(event) => this.handleOnUserNameChange(event)}
          placeholder="user name"
          value={this.state.userName}/>
      </p>
      <p>
        <input
          type="text"
          onChange={(event) => this.handleOnHometownChange(event)}
          placeholder="hometown"
          value={this.state.hometown}/>
      </p>
        <input type="submit" />
      </form>
    )
  }
}

export default UserInput;
