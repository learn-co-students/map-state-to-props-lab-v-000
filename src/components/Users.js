import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          {this.props.users.map((user, index)=>{
            return (<li key={index}>
              Username: {user.userName}<br />
              Hometown: {user.hometown}
            </li>);
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {users: state.users, primaryUser: state.users[0]};
}

export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
