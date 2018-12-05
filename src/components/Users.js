import React from 'react';
import { connect } from 'react-redux';

const Users = (props) => {
  return (
    <div>
      <h4>{props.users.length} users</h4>
      <ul>
        {props.users.map(user => (
          <li key={user.username} >
            {user.username}<br />
            {user.hometown}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Users);
