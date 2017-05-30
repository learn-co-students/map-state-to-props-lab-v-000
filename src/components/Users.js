import React from 'react';
import { connect } from 'react-redux';

export class Users extends React.Component {

  render() {
    const users = this.props.users.map((user, index)=>{return <li key={index}>username: {user.username}, hometown: {user.hometown}</li>})

    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export const ConnectedUsers = connect(mapStateToProps)(Users);
