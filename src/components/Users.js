import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    const users = this.props.users.map(((user, i) => <li key={i}>{user.username}</li>))
    return (
      <div>
        <h5>Total Users: {this.props.userCount}</h5>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
