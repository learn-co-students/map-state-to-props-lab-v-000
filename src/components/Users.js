import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */


class Users extends Component {

  render() {
    //const that you want to use in your return
    const users = this.props.users.map((user, i) => {
      return <li key={i}>{user.username}</li>
    })
    return (
      <div>
        {this.props.userCount}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
   };
};

export default connect(mapStateToProps)(Users);
