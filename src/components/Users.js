import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    console.log('users', this.props.users)
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
      <h5>
        Current users in the store: {this.props.users.length} 
      </h5>
      </div>
    )
  }

  renderUsers = () => {
    return this.props.users.map(user => <li>{user.username}</li> )
  } 
  
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
