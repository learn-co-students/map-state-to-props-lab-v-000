import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  state = { users: [] }

  render() {
    return (
      <div>
      <h6>Total # of users: { this.props.userCount }</h6>
        <ul>
          { this.props.users.map((user,i) => <li key={ i }>{user.username}</li>) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps) (Users);
