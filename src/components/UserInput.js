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

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch(addUser(this.state));
    this.setState({userName: '', hometown: ''});
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
      <p>
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}
          placeholder="user name"/>
      </p>
      <p>
        <input
          type="text"
          name="hometown"
          value={this.state.hometown}
          onChange={this.handleChange}
          placeholder="hometown"/>
      </p>
        <input type="submit" />
      </form>
    )
  }
}

export default UserInput;
