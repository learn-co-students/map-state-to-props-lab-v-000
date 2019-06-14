import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
	

  render() {
 
		const userList = (users) => {
			return users.map(
				(el, idx) => <li key={idx}>{el.username}</li>
			)
		}

		 return (
				<div>
					<ul>
						{userList(this.props.users)}
					</ul>
					<p>User Count: {this.props.users.length}</p>
				</div>
			)
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users)
//export default Users
