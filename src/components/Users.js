import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        {this.props.users.length} Users!
        <ul>
          {this.props.users.map((user, idx) => {
            return(
              <li key={idx}>Name: {user.username}, from {user.hometown}
              </li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };

};

export default connect(mapStateToProps)(Users);
