import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () => (
    this.props.users.map(u => ( 
      <li>
        <h3>{u.username}</h3>
        <h4>{u.hometown}</h4>
      </li> 
    ))
  )

  render() {
    return (
      <div>
        {`${this.props.count} users:`}
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (({ users }) => ({ users, count: users.length }))

export default connect(mapStateToProps)(Users)
