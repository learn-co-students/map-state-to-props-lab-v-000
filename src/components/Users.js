import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    ;

    return (
      <div>
        <ul>
          Users!
          <ul>
            {this.props.users.map((user, idx) => <li key={idx}>{user.username}</li>)}
          </ul>
          {this.props.usersLength}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    usersLength: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
