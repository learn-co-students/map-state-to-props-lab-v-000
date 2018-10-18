import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  usersCount = () => {
    return this.props.users.map(function (user) {
      return <li key={user.username}>{user.username} - {user.hometown}</li>
    })
  }

  render() {
    return (
      <div>
        Users!
        <ul>
          {this.usersCount()}
        </ul>
        Total Users: {this.props.userCount}
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
