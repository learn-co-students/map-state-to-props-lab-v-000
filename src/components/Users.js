import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>Username: {user.username},  Hometown: {user.hometown} </li>)}
          <p>Number of Users: {this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return { users: state.users, userCount: state.users.length}
}


export default connect(mapStateToProps)(Users);
