import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    //debugger
    return (
      <div>
        Users!
        <ul>

          {this.props.users.map(user => {
            return <li key={user.username}>{user.username}</li>
          })}
        </ul>

          {this.props.userCount}
      
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length};
}


// connect this component to Redux
export default connect(mapStateToProps)(Users)
