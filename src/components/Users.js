import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.length} Users!
          {this.props.users.map((user, index) => (
          <li key={index}>{user.username} - {user.hometown}</li>
          ))}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users};
}


export default connect(mapStateToProps)(Users);
