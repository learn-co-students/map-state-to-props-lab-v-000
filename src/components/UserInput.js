import React, { Component } from 'react';
import { addUser } from '../actions/users';

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      hometown: ''
    };
  }

  handleOnChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch(addUser(this.state));
  }

  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
      <p>
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={event => this.handleOnChange(event)}
          placeholder="username"
        />
      </p>
      <p>
        <input
          type="text"
          name="hometown"
          value={this.state.hometown}
          onChange={event => this.handleOnChange(event)}
          placeholder="hometown"
        />
      </p>
        <input type="submit"/>
      </form>
    )
  }
}
