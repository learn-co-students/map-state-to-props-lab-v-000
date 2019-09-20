import React, { Component } from 'react';
import { connect } from 'react-redux'


class Users extends Component {

  render() {
   let users_list = this.props.users.map((user) =>
    <li >{user.username} - {user.hometown}</li>
    );

    return (
      <div>
        <ul>
       {users_list}
        </ul>
        <p>{this.props.users.username}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users, 
    hometown: state.hometown,
    userCount: state.userCount 
  }
}

export default connect(mapStateToProps)(Users);
