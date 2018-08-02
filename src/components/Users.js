import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from './UserInput.js';

export class Users extends Component {
  render() {
    const users = this.props.users.map(function(user, index) {
      return <li key={index}>{user.userName} {user.hometown}</li>
    })
    return (
      <div>
        <ul>
      {users}
        </ul>
      <UserInput store={this.props.store} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
    primaryUser: state.users[0],
  };
};

export const ConnectedUsers = connect(mapStateToProps)(Users)
