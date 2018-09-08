import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from './UserInput';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        {this.props.numberofUsers}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, numberofUsers: state.users.length }
}

export default connect(mapStateToProps)(Users);
