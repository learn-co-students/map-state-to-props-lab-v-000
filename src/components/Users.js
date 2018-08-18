import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          User count!:
          { this.props.userCount }
        </ul>
        <ul>
        Users! { this.props.users.map((user,index) => <li>{ user.username }</li>) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
