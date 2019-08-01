import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          Users Count: {this.props.usersCount}
          {this.props.users.map(user => 
          <li>{user.username}-{user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users, 
    usersCount: state.users.length
  }
}

// export default Users
export default connect(mapStateToProps)(Users)
