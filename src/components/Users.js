import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {

    const users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)

    return (
      <div>
        <p>Total Users: {users.length}</p>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

export const ConnectedUsers = connect(mapStateToProps)(Users);
