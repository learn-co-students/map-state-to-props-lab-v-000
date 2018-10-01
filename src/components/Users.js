import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
      	{this.props.users.map((user, i) => <li key={i}>{user.username}</li>)}
        <p>{this.props.users.length}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {users: state.users, usersCount: state.usersCount}
}

export default connect(mapStateToProps)(Users)
