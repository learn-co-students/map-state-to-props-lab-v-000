import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => {
            return <li key={index}>{user.username} from {user.hometown}</li>
          })}
        </ul>
        <p>{this.props.users.length} users have been added!</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
