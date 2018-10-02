import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {

    let users = this.props.users.map((user, index) => <li key={index}>{user.username} from {user.hometown}</li>);
    //debugger
    return (
      <div>
        <ul>
          {users}
        </ul>
        <h3>Total Users: {this.props.userCount}</h3>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  };
}

export default connect(mapStateToProps)(Users)
