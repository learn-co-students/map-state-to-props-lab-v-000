import React from 'react';

import UserInput from './components/UserInput';
import ConnectedUsers from './components/Users';

const App = () => {
  return (
    <div className="App">
      <UserInput />
      <ConnectedUsers />
    </div>
  );
};

export default App;
