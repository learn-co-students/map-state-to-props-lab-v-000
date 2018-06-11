import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    const users = this.props.users.map((user, idx) => <li key={idx}>{user.userName}</li>);

    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

// where does the `state` being passed in come from?
const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0],
  };
};

export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
