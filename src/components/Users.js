import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

//   userName(user,index) {
    //var name = [user.username];
  //  return name;
//  this.props.users.map(user => user.username);
//  }

  render() {
    return (
      <div>
        <ul>
          <p>users:{this.props.users.map(user => <li>username:{user.username}}</li>)}</p>
          <p>users count:{this.props.numberOfUsers}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
        numberOfUsers: state.users.length
  };
}


export default connect(mapStateToProps)(Users);
