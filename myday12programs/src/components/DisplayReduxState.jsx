import React from 'react';
import { useSelector } from 'react-redux';

const DisplayReduxState = () => {
    const operationStateValue = useSelector((state)=>state.opReducer.value) //fetch statevalue from the reducer
    return (
        <div>
            <h1>State value: {operationStateValue}</h1>
        </div>
    );
};

export default DisplayReduxState;