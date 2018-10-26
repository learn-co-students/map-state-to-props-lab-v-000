import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    let allUsers = this.props.users.map((user, index) => <li key={index}> {user.username}</li>)

    return (
      <div>
        <ul>
          Users: {allUsers}
          User Count: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
    return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users);
