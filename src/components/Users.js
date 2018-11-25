import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  renderUsers = () => {
	  debugger
	return this.props.users.map(user => <li>Username: {user.username} <br></br> Hometown: {user.hometown} </li>)  
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.users.length} Users!
	    {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
    return {
 users: state.users
    };
};

export default connect(
    mapStateToProps
)(Users)

