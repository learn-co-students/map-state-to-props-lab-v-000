import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    return (
      <div>
        {this.props.users.length} Users
        <ul>
          {this.props.users.map((user) => (
            <li>
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps)(Users);
