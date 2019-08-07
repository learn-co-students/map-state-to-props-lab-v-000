import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => 
            <li key={user.username}>User: {user.username}</li>
            )}
        </ul>
        <h6>Total Users: {this.props.userCount}</h6>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}
export default connect(mapStateToProps)(Users)
