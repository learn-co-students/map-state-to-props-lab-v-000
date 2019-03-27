import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, i) => {
        return <li key={i}>{user.username}</li>
    })
    return (
      <div>
        {this.props.userCount} users have an account.
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
    return {users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users);
