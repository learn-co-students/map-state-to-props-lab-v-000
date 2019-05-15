import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserInput from './UserInput'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.users.map((user, index) =>
        <li key={index}>User: {user.username}, {user.hometown}</li>
        )}
        </ul>
        Total Users: {this.props.userCount}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users);

