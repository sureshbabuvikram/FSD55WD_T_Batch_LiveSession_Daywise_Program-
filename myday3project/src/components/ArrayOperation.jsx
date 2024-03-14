import React from 'react';

const ArrayOperation = ({setArrValue, arrvalue}) => {
    const removeArrValue=(indexPos)=>{
            setArrValue((pval)=>pval.filter((item,index)=>index !== indexPos ))
    }
const handleSubmit=()=>{
    setArrValue((pval)=>[...pval, 100]) // spread op  -> [1,2,3,4,5] , 100 => [1,2,3,4,5,100]
}

    return (
        <div>
            <h1>Array operation</h1>
            {arrvalue.map((item, index)=>{
                return(
                    <>
                        <div key={index} >{item}
                            <button onClick={()=>{removeArrValue(index)}} >remove</button>
                        </div>
                    </>
                )
            })}
            <button onClick={handleSubmit} > Add</button>
        </div>
    );
};

export default ArrayOperation;