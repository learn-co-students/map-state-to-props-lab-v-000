import React, { Component } from 'react';
// add this line to use connect component
import { connect } from 'react-redux'; 

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>User name: {user.username}</li>)}
          <p>User count: {this.props.userCount} </p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here - sends both users and usercount
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

// use connect here
export default connect(mapStateToProps)(Users);
