import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {
  render() {

    return (
      <div>
        <h3>Number of users: {this.props.numberOfUsers}</h3>
        <h3>Users List:</h3>
          <ul>
          {this.props.users.map( user => <li>{user.username}</li> )
          }
          </ul>
        <ul>

        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
