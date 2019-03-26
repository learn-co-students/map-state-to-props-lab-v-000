import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  render() {
   let users = this.props.users.map( (user,index) => <li key={index}> {user.username}  {user.hometown}</li>)

    return (
      <div>
        <p>Number of users: {this.props.number_of_users} </p>
        <h2>Users:</h2>
        <ul>
          { users }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
       users: state.users,
       number_of_users: state.users.length
    };

};

export default connect(mapStateToProps)(Users)
