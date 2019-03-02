import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  generateUserList() {
    const userList = this.props.users.map( (user, index) => <li key={index}>{user.username}</li>)
    return userList
  }

  render() {
    return (
      <div>
        {this.props.userCount}
        <ul>
          {this.generateUserList()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
