import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
// import App from '../App.js'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, idx) => <li key={idx}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users} {this.props.userCount}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
