import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {



  render() {
    debugger
    return (
      <div>
        <ul>
          <p>users:{this.props.users}</p>
          <p>users count:{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}


export default connect(mapStateToProps)(Users);
