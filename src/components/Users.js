import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    const users = this.props.users.map((user,index) => {
      return (
        <li key={index}>{user.userName} - {user.hometown} </li>
      )
    })
    return (
      <div>
        <ul>
          {users}
        </ul>
        <p>
          {this.props.primaryUser ?
          `our first user is ${this.props.primaryUser.userName}` : "no one has been created yet."
          }
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, primaryUser: state.users[0] }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)
// export default connect(mapStateToProps)(ConnectedUsers) // aren't we supposed to be connecting something around here?
