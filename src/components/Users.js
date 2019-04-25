import React, { Component } from "react";
import { connect } from "react-redux";
import { link } from "fs";

class Users extends Component {
  render() {
    let user = this.props.users.map((user, index) => (
      <li key={index}>{user.username}</li>
    ));
    return (
      <div>
        {this.props.currentUsers} Users!
        <ul>{user}</ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users, currentUsers: state.users.length };
};

// export default Users;
export default connect(mapStateToProps)(Users);
