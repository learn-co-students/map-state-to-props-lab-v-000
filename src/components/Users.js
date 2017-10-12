import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    const users = this.props.users.map((user) => {
      return (
        <li>
          {user.userName}
        </li>
      );
    });

    return (
      <div>
        <ul>
          {users}/* stuff should happen around here */
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0],
  };
};

export const ConnectedUsers = connect(mapStateToProps)(Users);
