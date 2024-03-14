import React,{useContext} from 'react';
import { myContext } from '../App';
import ContextComp4 from './ContextComp4';

const ContextComp3 = () => {
    const[contextValue, setContextValue]= useContext(myContext)
    const handleSubmit=()=>{
        setContextValue(val=>val+10)
    }
    return (
        <div>
            <h1> Context Comp3</h1>
          
            <h1>Context Value: {contextValue}</h1>
            <button onClick={handleSubmit} >Click</button>
            <ContextComp4 />
        </div>
    );
};

export default ContextComp3;