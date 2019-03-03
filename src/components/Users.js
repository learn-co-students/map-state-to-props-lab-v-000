import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  function userName(user,index) {
    var name = [user.username];
    return name;
  }

  render() {
    return (
      <div>
        <ul>
          <p>users:{this.props.users.map(userName)}</p>
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
