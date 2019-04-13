import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( u => {
              return <li>{u}</li>
          })}
        </ul>
          {this.props.userCount}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
	return { users: state.users.map( u => u.username ), userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
