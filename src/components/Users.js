import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) =>
      <li key={index}>{user.username}</li>
    )
    return (
      <div>
      <p>Number of Users: {this.props.userCounter}</p>
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
    userCounter: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
