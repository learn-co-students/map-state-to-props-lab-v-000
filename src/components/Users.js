import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <ul>
          {
            /* Write code here that displays the usernames of all users in the Redux store */
            this.props.users.map(user => <li><strong>Username:</strong> {user.username}, <strong>Hometown:</strong> {user.hometown}</li>)
          }
          </ul>
          {
            /* In addition, display the total number of users curently in the store */
            <div><strong>Number of users:</strong> {this.props.users.length}</div>
          }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
