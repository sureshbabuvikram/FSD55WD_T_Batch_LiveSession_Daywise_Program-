import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetCall = () => {
    // const baseURL='http://localhost:5000'
    const [getCallData, setGetCallData] = useState([])
    const [getCallMsg, setGetCallMsg] = useState('')
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        axios.get('https://fsd55fsbe.onrender.com/api/get-empdetails')
            .then((res) => {
                setGetCallData(res.data.data)
                setGetCallMsg(res.data.message)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Get Call Comp</h1>
            <h1>{getCallMsg}</h1>
            {getCallData.map((item, index) => {
                return (
                    <>
                        <div key={index}>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{item._id}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">{item.firstName}</h6>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">{item.lastName}</h6>
                                    <p class="card-text">{item.designation}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}

        </div>
    );
};

export default GetCall;