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
    console.log(this.props.users, this.userList())
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
  return {users: state.users}
}

const ConnectedUsers = connect(mapStateToProps)(Users)
export default ConnectedUsers
