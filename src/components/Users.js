import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    const users = this.props.users.map(user => <li> `${user.username}`</li>)

    return (
      <div>
        <ul>
        {users}
      Count:  {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {users: state.users, userCount: state.users.length}
}
export default connect(mapStateToProps)(Users)
