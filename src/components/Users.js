import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {

  render() {

  	const users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)

    return (
      <div>
      	<br />
      	<label>Users: </label> {this.props.userCount}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

// As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data 
// from the store that the connected component needs. It’s frequently referred to as just mapState for short.
// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.
const mapStateToProps = state => {
	return { users: state.users,
			 userCount: state.users.length
			}
}

export default connect(mapStateToProps)(Users)
