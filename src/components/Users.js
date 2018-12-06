import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        User Count: {this.props.userCount}
        <ul>
          {this.props.users.map((user, idx) => <li key={idx}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
