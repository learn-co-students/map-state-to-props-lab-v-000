import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
				<h4>Number of Users: {this.props.numberOfUsers}</h4>
				<h4> Users List:</h4>
        <ul>
					<p>
						{this.props.users.map((user) =>
							<div>
								<li>
									<p>Username: {user.username} </p>
									<p>Hometown: {user.hometown} </p>
								</li>
							</div>
							)}
					</p>
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
	return {
		users: state.users,
		numberOfUsers: state.users.length
	}
}

export default connect(mapStateToProps)(Users);
