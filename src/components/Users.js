import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    let users = this.props.users.map((user, index) => <li key={index}>{user.userName}</li>)

    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  };
};

// export const ConnectedUsers = Users // aren't we supposed to be connecting something around here?

export const ConnectedUsers = connect(mapStateToProps)(Users)
// Why don't they explain what the above means?  Why are we changing names here???
