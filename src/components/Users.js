import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.userCount} Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          <ul>{this.props.users.map(user => <li>{user.username}</li>)}</ul>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {users: state.users, userCount: state.users.length}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
