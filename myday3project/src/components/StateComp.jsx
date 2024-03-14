import React from 'react';

const StateComp = ({setValue, value}) => {
    const handleSubmit=()=>{
        setValue(pval=>pval+5)
    }
    return (
        <div>
            <h1>State Component</h1>
      <h1>State Value:{value}</h1>
      <button onClick={handleSubmit} >click</button>

        </div>
    );
};

export default StateComp;