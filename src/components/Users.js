import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  state = {
    users: []
  }

  render() {
    const userData = this.props.users.map((user) => {
      return <li>Username: {user.username}, Hometown: {user.hometown}</li>
    })
    return (
      <div>
        <ul>
          Users!
          {userData}
        </ul>
        <p>Total Number of Users: {this.props.users.length}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Users);
