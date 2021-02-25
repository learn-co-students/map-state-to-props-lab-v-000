import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <div>Number of users: {this.props.users.length}</div>
        <ol>
          {this.props.users.map((user) => (
            <li key={user.username}>{user.username}</li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Users);
