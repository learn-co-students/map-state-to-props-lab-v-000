import React, { Component } from 'react';
import { connect } from 'react-redux';


 class Users extends Component {

  render() {
    const users = this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    });
    debugger
      return (
      <div>
        <ul>
          {this.props.numberOfUsers}
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
  };
};

//export default Users
//export const ConnectedUsers = connect(mapStateToProps)(Users)
export default connect(mapStateToProps)(Users);