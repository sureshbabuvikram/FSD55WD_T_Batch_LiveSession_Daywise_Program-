import React from 'react';
import GetCall from './Components/GetCall';
import PostCall from './Components/PostCall';
import UpdateCall from './Components/UpdateCall';

const App = () => {
  return (
    <div>
      <h1> App Comp</h1>
      <GetCall />
      <PostCall />
      <UpdateCall />
    </div>
  );
};

export default App;