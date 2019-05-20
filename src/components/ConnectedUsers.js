import React from 'react'


// let ConnectedUsers = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

function ConnectedUsers(props){
  let users = props.users.map((user, index) => <li key={index}>{user.username}</li>);
  return users;
}


export default ConnectedUsers
