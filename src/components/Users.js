import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {



  render() {
    const userNames = this.props.users.map(user => (
      <li>{user.username}</li>
    ))
    //const userNumber = this.props.users.length
    return (
      <div>
        <ul>
          Users!
          {userNames
          /* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.userCount/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.userCount }
}


export default connect(mapStateToProps)(Users);

//  return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) })
//export default connect()(Users);
