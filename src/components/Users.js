import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index) => {
            return <li key={`${index}`}>{user.username}</li>;
          })}
          <div>
            <span>There are {this.props.userCount} users!</span>
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: [...state.users],
    userCount: [...state.users].length
  };
};

export default connect(mapStateToProps)(Users);
