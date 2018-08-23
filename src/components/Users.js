import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    const users = this.props.users.map(user => <li>username: {user.username}, hometown: {user.hometown}</li>)
    return (
      <div>
        {users.length} users:
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}

//add mapStateToProps here

export default connect(mapStateToProps)(Users)
