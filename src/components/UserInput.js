import React, { Component } from 'react';
// import { addUser } from '../actions/users';
import * as actions from '../actions/users';
import { connect } from 'react-redux'

class UserInput extends Component {

	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			hometown: ''
		};
	}

	handleOnUserNameChange(event) {
		this.setState({
			userName: event.target.value
		});
	}

	handleOnHometownChange(event) {
		this.setState({
			hometown: event.target.value
		});
	}

	handleOnSubmit(event) {
		event.preventDefault();
		let data = this.state
		// this.props.store.dispatch(addUser(this.state))
		this.props.onAddUser(data)
	}

	render() {
		return (
			<form onSubmit={(event) => this.handleOnSubmit(event)}>
				<p>
					<input
						type="text"
						onChange={(event) => this.handleOnUserNameChange(event)}
						placeholder="user name" />
				</p>
				<p>
					<input
						type="text"
						onChange={(event) => this.handleOnHometownChange(event)}
						placeholder="hometown" />
				</p>
				<input type="submit" />
			</form>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddUser: (data) => dispatch(actions.addUser(data))
	}
}

// export default UserInput;
export default connect(null, mapDispatchToProps)(UserInput);
