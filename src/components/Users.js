import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index) => <li key={index}> {user.username}</li>)}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users);
