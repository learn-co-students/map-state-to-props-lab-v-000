import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul className="usernames">
        {this.props.users.map((user, i ) => <li key={i}>{user.username}</li>)}
        </ul>
        <p>Number of Current Users: {this.props.userCount}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
