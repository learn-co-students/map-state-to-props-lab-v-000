import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <p>User Count: {this.props.userCount}</p>
        <ul>
          {/* Users! */}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map(user => <li>{user.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
      users: state.users,
      userCount: state.users.length
    }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
