import React, { Component } from 'react';
import {connect} from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
            return(<li>{user}</li>)
          })}
          Usercount: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return{
    users: state.users.map(user => user.username),
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
