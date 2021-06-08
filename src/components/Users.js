import React, { Component } from 'react';
import { connect } from "react-redux"

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <h3>Users!</h3>
          {this.props.users.map((user, idx)=><li key={idx}>{user.username}</li>)}
          
          <h4>Total users: {this.props.count}</h4>
          
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state=>({users: state.users, count: state.users.length})

export default connect(mapStateToProps)(Users);
