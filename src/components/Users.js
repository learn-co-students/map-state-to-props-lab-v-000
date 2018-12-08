import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.users.map((user) => 
            <li>
              {user.username}
            </li>
          )}
        </ul>
        {this.props.userCount}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};

export default connect(mapStateToProps)(Users);
