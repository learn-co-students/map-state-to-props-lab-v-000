import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          {/* stuff should happen around here */}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => { 
  return { users: state.users };
};
 
export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?

