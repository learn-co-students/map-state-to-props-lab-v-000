import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    let people = this.props.users.map((user,index) => <li> Name: {user.userName} | Hometown: {user.hometown}</li>)

    return (
      <div>
        <ul>
          {people}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, primaryUser: state.users[0] }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)



