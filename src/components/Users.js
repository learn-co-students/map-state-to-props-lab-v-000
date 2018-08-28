import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index) => {
            return (
              <li key={index + 1}>
                {index + 1} - {user.username} - {user.hometown}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return { users: state.users, hometown: state.hometown };
};

export default connect(mapStateToProps)(Users);
