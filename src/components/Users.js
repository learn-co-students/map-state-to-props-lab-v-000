import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
      	There are currently {this.props.users.length} users.
        <ul>
          {this.props.users.map((user, index) => 
          	<li key={index}>
	          	{user.username}
	          </li>
	          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return { users: state.users}
}

export default connect(mapStateToProps)(Users)
