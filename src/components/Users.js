import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map (user => 
            <li key={user.name}>{user.username} - {user.hometown}</li>
          )}           
        </ul>
        <p>Total: {this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);

