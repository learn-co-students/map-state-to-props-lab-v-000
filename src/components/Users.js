import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    const users = this.props.users.map((user, index) => {
      return <li key={index}>Name: {user.userName} - Hometown: {user.hometown}</li> 
    });

    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    primaryUser: state.users[0],
    users: state.users
  };
};

export const ConnectedUsers = connect(mapStateToProps)(Users)
