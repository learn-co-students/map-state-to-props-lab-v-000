import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {
  listUsers = () => {
    return this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    })
  }


  render() {
    console.log(this.props.users);
    return (
      <div>
        <ul>
          Users!
          {this.listUsers()}
        </ul>
        <h4>Total Users:</h4>
          <div>{this.props.users.length}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}


export default connect(mapStateToProps)(Users)
