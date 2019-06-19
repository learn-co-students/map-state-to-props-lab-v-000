import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  generateUsers = () => {
    return(
    this.props.users.map((user, index) =>
    <li key={index}>{user.username}</li>
    )
    )
  }

 
  render() {
    return (
      <div>
        <ul>
          {this.generateUsers()}
        </ul>
        <p>{this.props.userCount}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, 
           userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
