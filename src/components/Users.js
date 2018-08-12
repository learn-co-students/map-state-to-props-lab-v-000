import { connect } from 'react-redux'
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const userMap = this.props.users.map(user => {
      return <li key={user.usernam}>{user.username}</li>
    })

    return (
      <div>
        <p>There are {this.props.userCount} users.</p>
        <ul>
          {userMap}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
