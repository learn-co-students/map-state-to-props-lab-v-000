import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user,i) => {
            return (
              <li key={i}>
                  {user.username}
              </li>
            )
          })}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users,
  userCount: state.users.length }
}

export default connect(mapStateToProps)(Users);
