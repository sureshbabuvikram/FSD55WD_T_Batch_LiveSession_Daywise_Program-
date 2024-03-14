import React from 'react';
// import './style/CompA.css'
const CompA = ({ arr, a }) => {
    const handleSubmit = () => {
        alert("button click event in A Component")
    }
    return (
        <div>
            <h1 id='htag'>Component A : {a}</h1>
            <button onClick={handleSubmit} >click</button>
            {arr.map((item, index) => {
                return (
                    <>
                        <div key={index}>
                            <h1>{item}</h1>
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default CompA;