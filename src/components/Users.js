import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    let users = this.props.users.map((user, idx) => <li key={idx}>{user.username}</li>)

    return (
      <div>
        <h4>Total Users: {this.props.numberOfUsers}</h4>
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
