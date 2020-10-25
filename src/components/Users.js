import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here


class Users extends Component {

  render() {
    let users = this.props.users.map( user => <li>{user.username}</li>);

    return (
      <div>
        Users!
        <ul>
          {users} 
        </ul>
        {this.props.userCount}
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
  return {
    users: state.users, 
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
