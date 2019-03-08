import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

	state = {
		users: [],
		userCount: 0
	}

	render() {
		return (
			<div>
				<ul>
					Users!
					{this.props.users.map((user, index) => {
						return <li key={index}>username: {user.username} - hometown: {user.hometown}</li>
					})}
				</ul>
				<p>Total users: {this.props.userCount}</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		userCount: state.users.length
	}
}

export default connect(mapStateToProps)(Users)
