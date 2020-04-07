import React, { Component } from 'react';
import { connect } from 'react-redux';/*code change*/

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);/*code change*/

    return (
      <div>
        {this.props.numberOfUsers}{/*code change*/}
        <ul>
          {users} {/*code change*/}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {/*code change*/
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};

export default connect(mapStateToProps)(Users)/*code change*/
