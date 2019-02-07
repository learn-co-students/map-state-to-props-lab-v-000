import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

class Users extends Component {
  render() {
    // used to pull users from store in order to render into page
    let userList = this.props.users.map(user => <li key={shortid.generate()}>{user.username} from {user.hometown}</li>);
    
    return (
      <div>
        {this.props.userCount} current users.
        <ul>
          {userList}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
   };
};

export default connect(mapStateToProps)(Users);
