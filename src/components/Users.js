import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
      <p>User Count: {this.props.userCount}</p>
        <ul>
          Users!
          {this.props.users.map((x, i) => <li key={i}>{x.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};

export default connect(mapStateToProps)(Users)
