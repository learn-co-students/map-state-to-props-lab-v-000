import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {
  render() {
    const users = this.props.users.map((user, index) => {
      return <li key={index}>{user.userName} {user.hometown}</li>
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
    users: state.users,
    primaryUser: state.users[0]
  };
};

//this func would connect (pass prop of) the return value from mapStsteToProps (which would be an object {users: users: []}) to the Users component
//and exporte the component as if the componenet has a prop.users with all users
//this would be the results <Users users={stae.users}>

export const ConnectedUsers = connect(mapStateToProps)(Users);// aren't we supposed to be connecting something around here?

