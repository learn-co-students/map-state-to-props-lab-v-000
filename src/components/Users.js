import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {


  render() {
    return (
      <div>{console.log(this.props)}
        <p>{this.props.userCount}</p>
        <ul>
          {this.props.users.map((user, index) => {return <li key={index}>{user.username}</li>})}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // console.log('num users = ', state.users.length)
  return { 
    users: state.users,
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
