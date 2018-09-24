import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  showUser = () => {
    return this.props.users.map((user, idx)=> (
      <li key={idx}>{user.username}</li>
    ))
  }

  render() {
    return (
      <div>
        <ul>
          { this.showUser()}
          <br />

          Total: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
   }
}

export default connect(mapStateToProps) (Users)
