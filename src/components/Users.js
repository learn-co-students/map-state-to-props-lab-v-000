import React from 'react';

const Users = props => {
  const users = props.users.map((user, index) => {
    return <li key={index}>{user.userName}</li>;
  });

  return (
    <div>
      {users}
    </div>
  );

};

export default Users;
