import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    debugger
    let users = this.props.users.map((user, i) => <li key={i}>{user.username}</li>)
    return (
      <div>
        <ul>
        {users}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { users: state.users,
  userCount: state.users.length}
}


export default connect(mapStateToProps)(Users);
