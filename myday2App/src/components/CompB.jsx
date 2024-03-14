import React from 'react';

const CompB = ({obj}) => {
    const clickEvent=()=>{
        console.log("Component B");
    }
    return (
        <div>
            <h1 style={{color:'blue'}} >Component B</h1>
            <button onClick={clickEvent} >Click</button>
           <h2>Batch:{obj.batch}</h2> 
           <h2>Team:{obj.team}</h2> 
            
        </div>
    );
};

export default CompB;