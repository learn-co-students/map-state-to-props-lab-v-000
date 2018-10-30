import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */


class Users extends Component {

  render() {
    let users = this.props.users.map(
      (user, index) => <li key={index}>Name: {user.username} HomeTown: {user.hometown}</li>);

    return (
      <div>
        <ul>
          Users!
          <p>{users}</p>
          <p>{this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
        }
};

export default connect(mapStateToProps)(Users);
