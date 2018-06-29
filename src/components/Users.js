import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
  	const users = this.props.users.map((user, index) => <li key={index}>{user.userName}</li>)
  	let primaryUser = this.props.primaryUser
  	let pUsername
  	if (primaryUser) {
  		pUsername = <h2>Primary User: {primaryUser.userName}</h2>
  	} else {
  		pUsername = null
  	}

    return (
      <div>
      {pUsername}
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
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)

