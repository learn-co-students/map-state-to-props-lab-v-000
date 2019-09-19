import React, { Component } from 'react';
import { connect } from 'react-redux'


class Users extends Component {

  render() {
    return (
      <div>
        Number of Users: {this.props.usersCount}
        <ul>
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, usersCount: state.users.length }
}


export default connect(mapStateToProps)(Users);
