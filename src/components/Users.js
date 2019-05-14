import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render()
  {
    let usersList = this.props.users.map((user) => {
      return <li>{user.username}</li>;
    });
    let userCount = this.props.users.length

      return(
        <div>
          <h3>Users' count: {userCount}</h3>

          <ul>{usersList}</ul>
        </div>
    )
  }
}

  //add mapStateToProps, is looking at state.users and assigning to users, now
  //users is available on this.props.users
  const mapStateToProps = (state) => {
    return { users: state.users}
  }
  export default connect(mapStateToProps)(Users)
