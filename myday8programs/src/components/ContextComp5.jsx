import React,{useContext} from 'react';
import { myContext } from '../App';

const ContextComp5 = () => {
    const[contextValue, setContextValue]= useContext(myContext)
    const handleSubmit=()=>{
        setContextValue(val=>val+100)
    }
    return (
        <div>
            <h1>Context Comp5</h1>
            <h1>Context Value: {contextValue}</h1>
            <button onClick={handleSubmit} >Click</button>
        </div>
    );
};

export default ContextComp5;