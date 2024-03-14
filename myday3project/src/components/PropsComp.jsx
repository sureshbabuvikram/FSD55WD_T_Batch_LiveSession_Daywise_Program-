import React from 'react';

const PropsComp = ({a}) => {
    a=a+1
    const handleSubmit=()=>{
        a=a+1
        console.log(a);
    }
    return (
        <div>
            <h1>props component</h1>
            <h1>a Value:{a}</h1>
            <button onClick={handleSubmit} >click</button>
        </div>
    );
};

export default PropsComp;