import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    const userElements = this.props.users.map((userObj, index) => {
      return <li key={index} > Username: {userObj.userName} Hometown: {userObj.hometown} </li>
    })

    return (
      <div>
        <ul>
          {userElements}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}


export const ConnectedUsers = connect(mapStateToProps)(Users)