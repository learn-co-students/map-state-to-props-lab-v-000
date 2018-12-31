import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {this.props.users.map((user, index) =>
            <li key={index}>{user.username}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect( state => ({users: state.users, numberOfUsers: state.users.length}))(Users)
