import axios from 'axios';
import React, { useState } from 'react';

const UpdateCall = () => {
    const [putCallData, setPutCallData] = useState([])
    const handleSubmit = () => {
        updateCall()
    }

    const updateCall = async () => {
        const email = "vel@gmail.com"
        const payloads = { firstName: 'vel', lastName: 'ponnusamy', designation: 'COE' }
        axios.put(`https://fsd55fsbe.onrender.com/api/edit-emp/${email}`, payloads)
            .then((res) => setPutCallData(res.data.data))
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>update Call Comp</h1>
            <button onClick={handleSubmit} > edit </button>
            {putCallData.map((item, index) => {
                return (
                    <>
                        <div key={index} >
                            <h3> {item.firstName}</h3>
                            <h3> {item.lastName}</h3>
                            <h3> {item.email}</h3>
                            <h3> {item.designation}</h3>

                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default UpdateCall;