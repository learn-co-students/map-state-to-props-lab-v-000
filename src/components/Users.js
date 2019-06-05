import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        Here is a list of all {this.props.userCount} users:
        <br/>
        <ul>
          {this.props.users.map(user => (
              <li><strong>Name: </strong>{user.username} <br/>
                <strong>Hometown: </strong>{user.hometown}</li>
            ))}
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
  }
};

export default connect(mapStateToProps)(Users);