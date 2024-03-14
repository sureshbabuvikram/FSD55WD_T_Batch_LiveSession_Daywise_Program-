import React from 'react';
import Comp2 from './Comp2';

const Comp1 = ({a}) => {
    return (
        <div>
            <h1> Comp 1</h1>
            <Comp2 a={a} />
        </div>
    );
};

export default Comp1;