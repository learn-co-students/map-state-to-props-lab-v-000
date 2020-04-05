import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <ul>
          Users!
          <ul>
            {users.map(({ username }) => (
              <li key={username}>{username}</li>
            ))}
          </ul>
          {users.length}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps)(Users);
