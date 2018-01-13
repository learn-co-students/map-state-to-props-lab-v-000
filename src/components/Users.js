import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    const users = this.props.users
    debugger
    return (
      <div>
      Users List
        <ul>
          {
            users.map((user,key) => {
              return <li key={ user.userName }>{user.userName} - {user.hometown}</li>
            })
          }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
