import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <h3>Total Users: {this.props.userCount}</h3>
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
