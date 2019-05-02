import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        Total users: {this.props.userCount}
        <ul>
          {this.props.users.map(user => {
            return <li key={user.username}>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}//add mapStateToProps here

export default connect(mapStateToProps)(Users)
