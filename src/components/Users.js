import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <p><strong>Total Count of Current Users</strong>: {this.props.userCount}</p>
        <ul>
          {this.props.users.map(user => <li key={user.username}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ users: state.users, userCount: state.users.length })

export default connect(mapStateToProps)(Users);
