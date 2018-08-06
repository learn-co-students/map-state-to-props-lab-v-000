import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const listUser = this.props.users.map((e) =>
    <li>{e.username}</li>
  )


    return (
      <div>
        <ul>
          Users!
        </ul>
        <p>{this.props.users.length}</p>
        <p>{listUser}</p>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { users: state.users };
}

export default connect(mapStateToProps)(Users);
