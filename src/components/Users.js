import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
        <ul>{this.props.numOfUsers}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    numOfUsers: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
