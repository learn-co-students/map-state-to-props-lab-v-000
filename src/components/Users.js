import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          List of Users: {users} 
          User Count: {users.length}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}

        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
