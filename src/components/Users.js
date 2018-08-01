import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {
  userList = (props) => {
    return this.props.users.map( (user, index) => {
      return(
        <li key={index}> {user.userName} - {user.hometown}</li>
      )
    })
  }
  render() {

    return (
      <div>
        <ul>
          {this.userList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {users: state.users, primaryUser: state.users[0]}
}
 export const ConnectedUsers = connect(mapStateToProps)(Users)
