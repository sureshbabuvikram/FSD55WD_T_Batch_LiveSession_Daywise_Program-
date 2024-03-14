import React, { useEffect, useState } from 'react';

const LifeCycle = () => {
    const[value, setValue]= useState(0)
    useEffect(()=>{
        // axios.get('url').then(val=>setValue(val))
        console.log("Mounting");
        return ()=>{
            console.log("unmounting phase");
        }
    },[value]) //empty  render once  //state -> rerender 
    return (
        <div>
            <h1>Life Cycle Comp</h1>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(value+1)}} >click </button>
        </div>
    );
};

export default LifeCycle;