import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  render() {
    let users = this.props.users.map((user, idx) => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {users}
          {this.props.usersCount}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    usersCount: state.users.length
  };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users);
