import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD, SUB } from '../features/OperationSlice';


const UpdateReduxState = () => {
    const dispatch= useDispatch()
    return (
        <div>
            <h1>Update State Comp</h1>
            <button onClick={()=>{dispatch(ADD(1))}} >Add</button>
            <button onClick={()=>{dispatch(SUB(1))}} >Sub</button>
        </div>
    );
};

export default UpdateReduxState;