import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
   let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          
          {users}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}
//The Users component should display the username of a user submitted to the store. 
//To pass the final test, it should also display a total count of current users. 
//Try to use mapStateToProps to solve both, returning two keys, one for users and one for the userCount.

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};
//Each key will become a prop in your component, allowing you to assign values based on the provided state.


// connect this component to Redux
export default connect(mapStateToProps)(Users)
