import React, { Component } from 'react';
import { connect } from 'react-redux';
import manageUsers from '../reducers/manageUsers.js'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.length} Users!
          {this.props.users.map(u => {
            return <li>{u.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users }
};

export default connect(mapStateToProps)(Users);
