import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
	render() {
		const allUsers = this.props.users.map((user, index) => <li key={index}> {user.username}</li>);
		const numberOfUsers = this.props.users.length;
		return (
			<div>
				<ul>
					Users!
					{allUsers}
				</ul>
				{numberOfUsers}
			</div>
		);
	}
}

//add mapStateToProps here
function mapStateToProps(state) {
	// debugger;
	return { users: state.users };
}
// export default Users;
export default connect(mapStateToProps)(Users);
