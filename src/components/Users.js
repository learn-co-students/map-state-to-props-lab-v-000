import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {
//#ClassMethods
  render() {
    //const that you want to use in your return
    const users = this.props.users.map((user, i) => {
        return <li key={i}>{user.username}</li>
    })
    console.log(users)
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

const mapStateToProps = state => {
  return {
      users: state.users,
      userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
