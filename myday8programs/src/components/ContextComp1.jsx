import React,{useContext} from 'react';
import { myContext } from '../App';

const ContextComp1 = () => {
    const[contextValue, setContextValue] = useContext(myContext);
    const handleSubmit=()=>{
        setContextValue(val=>val+1)
    }
    return (
        <div>
            <h1>Context Comp1</h1>
            <h1>Context Value: {contextValue}</h1>
            <button onClick={handleSubmit} >Click</button>
        </div>
    );
};

export default ContextComp1;