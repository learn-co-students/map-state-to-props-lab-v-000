import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
 
  render() {
    return (
      <div>
        {this.props.userCount}
        <ul>
          {this.props.users.map((user, index) => 
          <li key={user.index}>{user.username}</li>
          )}
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
}

export default connect(mapStateToProps)(Users);
