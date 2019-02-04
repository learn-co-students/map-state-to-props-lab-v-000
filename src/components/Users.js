import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        User Count: {this.props.userCount}
        <ul>
          {this.props.users.map((user, index) => <li key={index}>{user.username} - {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    userCount: state.users.length
  };
}

export default connect(mapStateToProps)(Users);
