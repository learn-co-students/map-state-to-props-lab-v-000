import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          { this.props.users.map( user =>
            <div>
          	<li>{user.username}</li>
            </div>
          )}
        </ul>
        <p>Number of users: { this.props.user_number } </p>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
	return {
    users: state.users,
    user_number: state.users.length
  };
}

export default connect(mapStateToProps)(Users)
