import React, { Component } from 'react';
import { connect } from 'react-redux'


class Users extends Component {

  render() {

    const formatUsers = this.props.users.map((user, i) => <li key={i}>{user.username}</li>)

    return (
      <div>
        <ul>
          {this.props.number} Users!
          {formatUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users ,
    number: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
