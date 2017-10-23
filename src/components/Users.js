import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../App'

export class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.users.userName}bob</li>
          <li>fred</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, primaryUser: state.users[0] };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser : () => dispatch({
      type : 'ADD_USER'
    })
  }
}

export const ConnectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users) // aren't we supposed to be connecting something around here?

export default Users;
