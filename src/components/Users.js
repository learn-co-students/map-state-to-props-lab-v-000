import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <h4>Users</h4>
        <ul>
          {this.props.users.map((user, i) => <li key={i}>{user.username}</li>)}
        </ul>
        <p>User Count: {this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
