import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div>
        <ul>
          {this.props.users.map(user => {
            return (
              <li>
                {user.username}, {user.hometown}{" "}
              </li>
            );
          })}
        </ul>
        <div>{this.props.users.length}</div>
      </div>
    );
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Users);
