import React from 'react';
// import CompA from './components/CompA';
// import CompB from './components/CompB';
// import CompC from './components/CompC';
import Home from './components/Home';

const App = () => {
  let a=10;
  const arr=[1,2,3,4,5,6,7,8];
  const obj={batch:'FSd55', team:'suresh'}
  const arrObj=[
    {id:1,name:'anbu', designation:'fsd'},
    {id:2,name:'chandru', designation:'Manager'},
    {id:3,name:'gopi', designation:'fsd'},
    // {id:4,name:'renu', designation:'FSD'},
  ]
  return (
    <div>      
        <h1>App Component </h1>
        {/* <CompA arr={arr} a={a}  /> */}
        {/* <CompB obj={obj} /> */}
        {/* <CompC arrObj={arrObj} /> */}
        <Home arrObj={arrObj} />
    </div>
  );
};

export default App;