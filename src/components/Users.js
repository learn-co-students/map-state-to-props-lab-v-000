import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {



  render() {
    const userNames = this.props.users.map(user => (
      <li>{user.username}</li>
    ))
    const userNumber = this.props.users.length
    return (
      <div>
        <ul>
          Users!
          {userNames
          /* Write code here that displays the usernames of all users in the Redux store */}
          {userNumber/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}


export default connect(mapStateToProps)(Users);


//export default connect()(Users);
