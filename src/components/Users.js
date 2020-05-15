import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
            <h1> {this.props.usersCount} </h1>
            {this.props.users.map((user) => <li>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
          usersCount: state.users.length }
}

export default connect(mapStateToProps)(Users);
