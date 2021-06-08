import React, { Component } from 'react';
import { connect } from 'react-redux';

// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {users}

        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
 debugger
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)
