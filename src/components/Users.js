import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {
  renderUsers = () => {
    return this.props.users.map(user => <li key={user.id}> {user.username} </li>)
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
        <p>{this.props.userCount}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {users: state.users, userCount: state.users.length} 
}

export default connect(mapStateToProps)(Users)
