import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '.App.css';
// add any needed imports here
class Users extends Component {

  render() {
    //  used arrow function here.
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>
      );
    return (
      <div>
      {/* In addition, display the total number of users curently in the store */}

        {this.props.numberOfUsers}
        <ul>
          Users!
          {/* /* Write code here that displays the usernames of all users in the Redux store */}
          {users}
           
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
