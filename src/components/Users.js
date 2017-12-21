import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
  	const listUsers = this.props.users.map(user =>
  		<li>Name: {user.userName}, Hometown: {user.hometown}</li>
  	)

    return (
      <div>
        <ul>
          {listUsers}
        </ul>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
	return { users: state.users, primaryUser: state.users[0] }
}

export const ConnectedUsers = connect(mapStatetoProps)(Users) // aren't we supposed to be connecting something around here?

