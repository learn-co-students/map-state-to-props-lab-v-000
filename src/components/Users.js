import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <span>{this.props.users.length}</span> Users!
          {this.props.users.map(((user, i) => (
            <li key={`weak-key-${i}`}>{user.username}</li>
          )))

          }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
