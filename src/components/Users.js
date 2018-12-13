import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  renderUsernames = () => {
    return this.props.usernames.map((usr) => {
        return <li>{usr}</li> 
    })
  }

  render() {
    return (
      <div>
        <ul>
          Users!
            { this.renderUsernames() }
            { this.props.totalUsers }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {3
  const users = state.users.map(usr => usr.username);
  return { usernames: users, totalUsers: state.users.length } 
}

export default connect(mapStateToProps)(Users)
