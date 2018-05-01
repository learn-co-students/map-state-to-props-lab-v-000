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

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
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
          name="userName"
          onChange={(event) => this.handleOnChange(event)}
          placeholder="user name"/>
      </p>
      <p>
        <input
          type="text"
          name="hometown"
          onChange={(event) => this.handleOnChange(event)}
          placeholder="hometown"/>
      </p>
        <input type="submit" />
      </form>
    )
  }
}

export default UserInput;
