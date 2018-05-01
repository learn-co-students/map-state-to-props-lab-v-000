import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    let renderUsers = this.props.users.map((user, index) => {
      return <li key={index}>{user.userName}</li>
    });

    return (
      <div>
        <ul>
          {/* stuff should happen around here */}
          {renderUsers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return { 
    users: state.users,
    primaryUser: state.users[0] //
  };
};

//export const ConnectedUsers = Users // aren't we supposed to be connecting something around here?

export const ConnectedUsers = connect(mapStateToProps)(Users);