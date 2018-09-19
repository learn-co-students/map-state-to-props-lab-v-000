import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map(user => <li>{user.username} - {user.hometown}</li>)
    return (
      <div>
        <ul>
          Total: {this.props.users.length}
          {users}
        </ul>
      </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStoreToProps)(Users)
