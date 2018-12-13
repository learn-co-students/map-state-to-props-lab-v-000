import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)

    return (
      <div>
        <ul>
        {/* <p> {this.props.users.length}</p> */}
        {this.props.userLength}
        {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userLength: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
