import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.js';


// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(function(user) {
            return <li key={user.username}> {user.username} </li>})}
          {this.props.users.length}
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