import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        <h3>Total users: {this.props.userCount}</h3>
      </div>
    )
  }
}

// add mapStateToProps here
const mapStateToProps = (state) => {
  debugger;
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
