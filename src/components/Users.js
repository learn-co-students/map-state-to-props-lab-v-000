import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user) => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          {users}
        </ul>
        <p>{this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return { users: state.users};
}

export default connect(mapStateToProps)(Users);
