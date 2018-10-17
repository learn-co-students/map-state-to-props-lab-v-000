import React, { Component } from 'react';
import { connect } from 'react-redux';
import manageUsers from '../reducers/manageUsers.js'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users }
};

export default connect(mapStateToProps)(Users);
