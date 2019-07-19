import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {


renderUsers = () => (
  this.props.users.map(u => (
    <li>
      <h2>{u.username}</h2>
      <h3>{u.hometown}</h3>
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

//add mapStateToProps here

const mapStateToProps = (({ users }) => ({ users, count: users.length }))

export default connect(mapStateToProps)(Users);
