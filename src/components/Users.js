import React, { Component } from 'react';
import { connect } from 'http2';

class Users extends Component {
	render() {
		debugger;
		return (
			<div>
				<ul>Users! {this.props.users}</ul>
			</div>
		);
	}
}

//add mapStateToProps here
function mapStateToProps(state) {
	debugger;
	return { users: state.users };
}
export default connect()(Users);
