import React, {useState} from 'react';
import UserRegister from './Components/UserRegister';
import Login from './Components/Login';
import GetCallUsingToken from './Components/GetCallUsingToken';

const App = () => {
  const[token, setToken]= useState('')
  return (
    <div>
      <h1>App Comp</h1>
      {/* <UserRegister /> */}
      <Login setToken={setToken} />
      <GetCallUsingToken token={token} />
    </div>
  );
};

export default App;