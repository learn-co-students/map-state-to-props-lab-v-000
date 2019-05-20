import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    debugger
    let users = this.props.users.map((user, index) =>
        <li key={index}>{user.username}, {user.hometown}</li>,
      <li key={index}>{user.username}, {user.hometown}</li>)

    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
