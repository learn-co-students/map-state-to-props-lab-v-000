import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <span>{this.props.users.length} </span>Users!
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
