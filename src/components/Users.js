import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    let total = users.length;
    return (
      <div>
        <p>Total: {total}</p>
        <ul>
          {users} 
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
//
const mapStateToProps = (state) => {
  return { users: state.users };
}



export default connect(mapStateToProps)(Users);
