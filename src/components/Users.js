import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (

      <div>
        <ul>
          {users}
        </ul>
        Total User: { this.props.numberOfUsers }
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
   }
}

export default connect(mapStateToProps)(Users)
