import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '',
    hometown: '',
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      username: '',
      hometown: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(event) => this.handleChange(event)}
            placeholder="username" />
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={(event) => this.handleChange(event)}
            placeholder="hometown" />
          <input type="submit" />
        </form>
      </div>
    );
  }

};

export default UserInput;
