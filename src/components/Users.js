import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        total users: {this.props.users.length}
        <ul>
          {this.props.users.map(u => <li> {u.username} </li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {users: state.users}

}
export default connect(mapStateToProps)(Users)
