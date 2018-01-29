import React, { Component } from 'react';


export class Users extends Component {

  render() {
    const usersLi = this.props.users.map((user,index) => <li key={index}>{user.userName} - {user.hometown}</li>)
    return (
      <div>
        <ul>
          {usersLi}
        </ul>
      </div>
    )
  }
}
export default Users; // aren't we supposed to be connecting something around here?
