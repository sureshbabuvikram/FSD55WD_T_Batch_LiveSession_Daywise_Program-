import React from 'react';
// import './style/CompC.css';
import CompA from './CompA';

const CompC = ({arrObj}) => {
    return (
        <div className='compc'>
            <h1> Component c</h1>
            <p  >This is my team</p>
            {/* <CompA /> */}
            {arrObj.map((item,index)=>{
                return(
                    <>
                        <div key={index}>
                            <h1>{item.id} </h1>
                            <h1>{item.name} </h1>
                            <h1>{item.designation} </h1>
                        </div>
                    </>
                )
            })}

        </div>
    );
};

export default CompC;