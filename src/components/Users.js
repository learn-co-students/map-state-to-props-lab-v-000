import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let user = this.state.users.map(user => {user.username})
    return (
      <div>
        <ul>
        {user}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { users: state.users,
  userCount: state.users.length}
}


export default connect()(Users);
