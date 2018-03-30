import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    let users = this.props.users.map((users, index) => <li key={index}> {users.userName} </li> )

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
  return { primaryUser: state.users[0]
  };
};
 
export const ConnectedUsers = connect(mapStateToProps)(Users);

