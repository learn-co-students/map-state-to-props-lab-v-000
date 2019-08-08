import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index} >{user.username}</li>
          ))
        }
        </ul>
        <h3>{this.props.numberOfUsers}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
    numberOfUsers: state.users.length
  }
}

//add mapStateToProps here

export default connect(mapStateToProps)(Users);
