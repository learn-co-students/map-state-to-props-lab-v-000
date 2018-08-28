import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  displayUsers = () => {
    return this.props.users.map( user => (
    <li key={user.username}>{user.username}</li>
    ));
  }

  render() {
    return (
      <div>
        <ul>
          { this.displayUsers() }
          <p>User count: {this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  };
}


export default connect(mapStateToProps)(Users);
