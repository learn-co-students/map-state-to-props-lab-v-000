import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {



  render() {

    const usersList = this.props.users.map((user,i)=><li key={i}>{user.username}</li>)

    return (
      <div>
        <ul>
          {usersList}
          {this.props.usersCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state)=>{
  return{users: state.users,
         usersCount: state.users.length};
}

export default connect(mapStateToProps)(Users)
