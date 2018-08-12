import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  renderUsers = () => {

  }
  render() {
    return (
      <div>
        <ul>
        {this.props.users.map((user, index) => {
          return(<li> key={index} username:{user.username}, from {user.hometown} </li>)
        })}
        {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users  }
}

export default connect(mapStateToProps)(Users)
