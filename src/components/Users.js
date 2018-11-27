import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  createUserItems() {
    return this.props.users.map(user => {
      return <li keyParams={user.id}>{user.username}</li>;
    });
  }

  render() {
    return (
      <div>
        <p>{this.props.numberOfUsers}</p>
        <ul>{this.createUserItems()}</ul>
      </div>
    );
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
}

export default connect(mapStateToProps)(Users);
