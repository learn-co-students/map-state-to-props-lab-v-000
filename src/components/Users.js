import React, { Component } from 'react';
// add any needed imports here
//Connect the Users component similar to how it is connected in UserInput.
import { connect } from 'react-redux';
class Users extends Component {

  render() {
  let displayUsers = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {displayUsers}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.userCount}
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
  };
};

// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users)
