import React from 'react';
import Comp3 from './Comp3';

const Comp2 = ({a}) => {
    a=a+1
    return (
        <div>
            <h1> Comp 2</h1>
            <Comp3 a={a}  />
        </div>
    );
};

export default Comp2;