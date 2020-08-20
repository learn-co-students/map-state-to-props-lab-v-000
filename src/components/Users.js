import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
        <div>
          <ul>
            Users!
            {users}<br></br>
            {this.props.users.length}
          </ul>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {users: state.users, 
          totalUsers: state.users.length}
}

export default connect(mapStateToProps)(Users)
