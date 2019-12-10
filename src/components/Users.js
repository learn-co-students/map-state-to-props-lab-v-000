import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    console.log(this.props)
    return (

      <div>
      {this.props.userCount} Users!
        <ul>
          {this.props.users.map((user, idx) => {
            return <li key={idx}>{user.username}, {user.hometown}</li>
            })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
