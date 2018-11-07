import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return {users: state.users, userCount: state.users.length}
}

connect(mapStateToProps)(Users);

export default Users
