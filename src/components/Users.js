import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map( (user,i) => <li key={i}>{user.username}</li>)}
        </ul>
        {this.props.count}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    count: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
