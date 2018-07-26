import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    let users = this.props.users.map(user => <li><ul><li>{user.userName}</li><li>{user.hometown}</li></ul></li>)
    
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
  return {users: state.users, primaryUser: state.primaryUser}
}

export const ConnectedUsers = connect(mapStateToProps)(Users);

