import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    let count = this.props.count
    return (
      <div>
        <ul>
          Users:
          {users}
          {count}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
    count: state.users.length };
};

export default connect(mapStateToProps)(Users)
