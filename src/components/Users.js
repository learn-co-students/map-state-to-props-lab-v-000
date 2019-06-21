import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users! {this.props.users.length}
          {this.props.users.map(user => <li key={user.username}>Name: {user.username}, Hometown: {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

//add mapStateToProps here

export default connect(mapStateToProps)(Users)
