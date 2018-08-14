import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <ul>
            {this.props.users.map((user,index) => <li key={index}>{user.username}</li>)}<br></br>
          </ul>
          User Count: {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
