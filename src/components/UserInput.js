import React, { Component } from 'react';
import { addUser } from '../actions/users';

class UserInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      hometown: ''
    };

    this.handleOnUserNameChange = this.handleOnUserNameChange.bind(this)
    this.handleOnHometownChange = this.handleOnHometownChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
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
    console.log("submitted!")

    this.props.store.dispatch(addUser(this.state))
  }

  render() {
    console.log("hello from render INPUT!!!")
    return(
      <form onSubmit={this.handleOnSubmit}>
      <p>
        <input
          type="text"
          onChange={this.handleOnUserNameChange}
          placeholder="user name"/>
      </p>
      <p>
        <input
          type="text"
          onChange={this.handleOnHometownChange}
          placeholder="hometown"/>
      </p>
        <input type="submit" />
      </form>
    )
  }
}
export default UserInput;
