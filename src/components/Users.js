import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
        </ul>
        {this.props.numberOfUsers}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return { 
		users: state.users,
		numberOfUsers: state.users.length
	};
}


export default connect(mapStateToProps)(Users);
