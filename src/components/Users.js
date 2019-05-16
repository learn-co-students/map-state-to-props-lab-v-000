import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const users = this.props.users.map((user, index)=><li key={index}>{user.username} </li>)
    return (
      <div>
        <ul>
          Users!
          {users }
          Total Users are {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps =(state)=>{
  debugger;

  return { users: state.users , userCount: Object.keys(state.users).length}
}

export default connect(mapStateToProps)(Users);
