import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        Total users: {this.props.userCount}
        <ul>
          {this.props.users.map(user =>
            <li>{user.username}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let userCount = state.users.length;
  return { users: state.users, userCount: userCount };
}

export default connect(mapStateToProps)(Users);
