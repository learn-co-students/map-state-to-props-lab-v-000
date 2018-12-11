import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () => {
    return (
      this.props.users.map((user, i) => {
        return (
          <li key={i}>{user.username}</li>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
        <p>{this.props.userCount}</p>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
