import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          Users!
          Users Count: {this.props.usersCount}
  
          {this.props.users.map(user => <li>{user.username} from {user.hometown}</li>)}
    
          
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {users: state.users, usersCount: state.users.length}
}


export default connect(mapStateToProps)(Users)
