import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(u => (
        	<li>{u.username}</li>
          ))}
        </ul>
        <p>Count: {this.props.count}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users,
  			count: state.users.length }
}

// export default Users
export default connect(mapStateToProps)(Users);





