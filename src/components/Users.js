import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConnectedUsers from './ConnectedUsers.js'

class Users extends Component {

  render() {
    // let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        {this.props.users.length}
        <ul>
          Users!
          <ConnectedUsers users={this.props.users}/>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);

// export default Users
