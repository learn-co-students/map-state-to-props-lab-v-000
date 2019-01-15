import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.userCount} Users:</h1>
        <ul>
          {
            this.props.users.map((user) => {
              return (
                <li key={this.props.users.indexOf(user.username)}>{user.username}, from {user.hometown}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
