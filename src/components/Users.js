import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          {this.props.users.map((user, i) => <li key={i}>{user.userName}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}
export const ConnectedUsers = connect( mapStateToProps )(Users) // aren't we supposed to be connecting something around here?
