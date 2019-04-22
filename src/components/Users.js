import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
              {this.props.users.length > 0 ? this.props.users.map(
                (user,index) => {
                  console.log("Here are the props: ", this.props)
                  return (
                    <li key={index}>{user.username}</li>
                  )
                }
              ) : ''} 
              </ul>
              {this.props.users.length > 0 ? <p>Total users: {this.props.users.length}</p> : "" }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
