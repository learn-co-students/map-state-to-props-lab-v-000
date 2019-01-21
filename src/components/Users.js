import React, { Component } from 'react';
import { connect } from 'react-redux';
// this component is named as ConnectedUsers when it's imported in App.js
class Users extends Component {

  render() {
    return (
      <div>
        total users: {this.props.numberOfUsers}
        <ul>
          {this.props.users.map((user, index) => <li key={index}> {user.username} </li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {users: state.users, numberOfUsers: state.users.length}
}
export default connect(mapStateToProps)(Users)
