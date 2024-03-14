import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducer = () => {
    const[state, dispatch] = useReducer(ReducerAction, 0)
    return (
        <div>
            <div>
            {state}                
            </div>
            <button  onClick={()=>{dispatch({type:'ADD', payload:5})}} >ReducerADD </button>
            <button  onClick={()=>{dispatch({type:'SUB', payload:2})}} >ReducerSUB </button>
            
        </div>
    );
};

export default UseReducer;