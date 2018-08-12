import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user)=>{
            return(
              <li>{user.username}</li>
            )
          })}
        </ul>
        <p>User Count: {this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
  return ({
    users: state.users,
    userCount: state.users.length
  });
}

export default connect(mapStateToProps)(Users);
