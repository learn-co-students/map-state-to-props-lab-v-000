import React, { Component } from 'react';
import { connect }  from 'react-redux';

class Users extends Component {

  render() {
    const user = this.props.users.map((user, index) => (
      <li key={index} >
        Username: {user.username}<br/>
        Hometown: {user.hometown}
        <br/><br/>
      </li>
    ));

    return (
      <div>
        <p>{this.props.userCount}</p>
        <ul>
          {user}
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
  }
}

export default connect(mapStateToProps)(Users);
