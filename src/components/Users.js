import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        Number of Users:
        { this.props.users.length }
        { 
          this.props.users.map(user => 
              <li>{user.username}</li>
            )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
