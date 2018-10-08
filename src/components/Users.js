import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    let users = this.props.users.map( (user,index) => <li key={index}>{user.username} from {user.hometown}</li>)

    return (
      <div>
        Number of users: {this.props.userNumber}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

// this function allows one to access specific parts of the store through props, rather than using props.store and then querying the state
const mapStateToProps = (state) => {
  return { users: state.users,
           userNumber: state.users.length};
};
// the connect method in export links the component to the mapStateToProps method
export default connect(mapStateToProps)(Users);
