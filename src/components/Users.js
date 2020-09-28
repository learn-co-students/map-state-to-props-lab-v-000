import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => 
            <li key={user.hometown}>
              {user.username}
            </li>
          )}
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
