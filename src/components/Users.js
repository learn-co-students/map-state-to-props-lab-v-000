import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map(
          (user, index) => <li key={index}>{user.username}: {user.hometown}</li>
        )}
        {this.props.userCount}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

export const ConnectedUsers = connect(mapStateToProps)(Users);