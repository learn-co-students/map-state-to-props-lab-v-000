import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        <ul>
          <p>{users}</p>
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
