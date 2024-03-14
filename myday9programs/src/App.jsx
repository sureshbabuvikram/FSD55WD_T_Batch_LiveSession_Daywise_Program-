import React from 'react';
import UseReducer from './components/usereducer/UseReducer';
// import WithoutUseRef from './components/useref/WithoutUseRef';

const App = () => {
  return (
    <div>
      <h1>App Comp </h1>
      {/* <WithoutUseRef /> */}

      {/* Eg : 2 */}
      <UseReducer />
    </div>
  );
};

export default App;