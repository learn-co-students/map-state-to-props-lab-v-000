import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <p>{UserInput}</p>
          <p>{this.props.users.count}</p>
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  debugger;
  return { Users: state.users }
}

export default connect()(Users);
