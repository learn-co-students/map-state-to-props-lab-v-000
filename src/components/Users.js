import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <p>{this.props.userCount} User(s) </p>
        <ul>
          {this.props.users.map(u => <li>{u.username}</li>)}
        </ul>
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

export default connect(mapStateToProps)(Users)
