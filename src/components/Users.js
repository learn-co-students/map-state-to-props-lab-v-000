import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    const userDetail = this.props.users.map((user, index) => {
      return `<li>${user.userName} ${user.hometown}</li>`
    })

    return (
      <div>
        <ul>
          {userDetail}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  };
}

export const ConnectedUsers = connect(mapStateToProps)(Users);
