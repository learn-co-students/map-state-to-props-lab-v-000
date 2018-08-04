import React, { Component } from 'react'
import UserInput from '../components/UserInput'
import Users from '../components/Users'
import { connect } from 'react-redux'

class UsersContainer extends Component {
  render() {
    return (
      <div>
        <UserInput addUser={this.props.addUser}/>
        <Users users={this.props.users}/>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

const mapDispatchToProps = dispatch => ({ addUser: user => dispatch({ type: "ADD_USER", user }) })

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
