import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    const userlist = (this.props.users)
    debugger
    return (
      <div>
        <ul>
          Users! {this.props.users.length}
        </ul>
        Userlist: {
          this.props.users.map(user => (
            <ul>
              <li>{user.username}</li>
            </ul>
          ))
        }
      </div>
    )
  }
}



//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps)(Users);
