import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let usersList = this.props.users.map((user, i) => <li key={i}>{user.username}</li>);

    return (
      <div>
        {this.props.userCount}
        <ul>
          {usersList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
