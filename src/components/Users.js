import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) =>
      <li key={index}> {user.userName} </li> )

    return (
      <div>
        <ul>
        /* stuff should happen around here */
          {users}
        </ul>
      </div>
    )
  }
}

//***********************************************
//**** The KEYS below become PROPS in This component. ****
const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

//****************************************************
export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
