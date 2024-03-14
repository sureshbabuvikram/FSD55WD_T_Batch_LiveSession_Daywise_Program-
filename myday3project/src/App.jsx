import React, { useState } from 'react';
import PropsComp from './components/PropsComp';
import StateComp from './components/StateComp';
import StateComp2 from './components/StateComp2';
import ArrayOperation from './components/ArrayOperation';
import ConditionalRendering from './components/ConditionalRendering';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import ProCard from './components/ProCard';

const App = () => {
  const[value, setValue]=useState(10);
  let a=10;

  let b=[1,2,3,4,5];
  const[arrvalue, setArrValue] = useState(b) // arrValue=[1,2,3,4,5]


  const[status, setStatus]= useState(true)
  const[cartCount, setCartCount] = useState(0)
  let data=[{id:1,name:"jeans",price:1500},
    {id:2,name:"shirt",price:1000},
    {id:3,name:"Tshirt",price:700}];
    const[products, setProducts]= useState(data)
  return (
    <div>
      <h1>App Component</h1>
      {/* <h1>a Value:{a}</h1> */}
      {/* <h1>State Value:{value}</h1> */}
      {/* <PropsComp a={a} /> */}
      {/* <StateComp setValue={setValue} value={value} /> */}
      {/* <StateComp2 setValue={setValue} value={value} /> */}

      {/* {/* Eg:2 * Array & keys using state/} */}
      {/* {arrvalue} */}
      {/* <ArrayOperation setArrValue={setArrValue}  arrvalue={arrvalue} /> */}

      {/* {/* Eg:3 * conditional rendering/} */}
      {/* <h1>cart count:{cartCount}</h1>  */}
      {/* {status? <ConditionalRendering setCartCount={setCartCount} cartCount={cartCount} setProducts={setProducts} products={products} /> : ''} */}
      
      {/* Task */}
      <Nav />
      <Header />
      <ProCard />
      <Footer />

    </div>
  );
};

export default App;