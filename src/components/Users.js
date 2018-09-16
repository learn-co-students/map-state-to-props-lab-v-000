import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
 
   showAllUsers = () => {
   return this.props.users.map( u => (
    <li>{u.username}</li>)
 )}

  render() {
    
    return (
      <div>
        <ul>
         { this.showAllUsers() }
        </ul>
        {this.props.userCount}
      </div>
    )
  }
}


 const mapStateToProps = (state) => {
  return {
      users: state.users,
      userCount: state.users.length
    }
   
  }


export default connect(mapStateToProps) (Users)

