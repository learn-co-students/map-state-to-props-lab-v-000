import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((u,i)=>{
            return <li key={i}>{u.username}</li>
          })}

        </ul>
        total: {this.props.users.length}
      </div>
    )
  }
}

//add mapStateToProps here

function mapStateToProps(state){
  return {users: state.users}

}


export default connect(mapStateToProps)(Users);
