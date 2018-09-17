import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  renderUsers = () => {
    return this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          Users! {this.props.userCount}<br />
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users);
