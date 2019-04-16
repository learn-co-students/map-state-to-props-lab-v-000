import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    let number = this.props.users.length
    return (
      <div>
        <h3>{number} of users</h3>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
          number: state.users.length }
}
export default  connect(mapStateToProps)(Users)
