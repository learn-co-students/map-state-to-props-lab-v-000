import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map(
          (user, index) => <li key={index}>{user.username}: {user.hometown}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.count
  };
};

export const ConnectedUsers = connect(mapStateToProps)(Users);