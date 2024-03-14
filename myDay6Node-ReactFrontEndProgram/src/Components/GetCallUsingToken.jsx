import axios from 'axios';
import React, { useState } from 'react';

const GetCallUsingToken = ({token}) => {
    const[responseData, setResponseData]= useState([])
    const[responseMsg, setResponseMsg]= useState('')
    const handleSubmit=async()=>{
        await axios.get('http://localhost:4000/api/user/getuser',{
            headers:{
                Authorization: token
            }
        })
        .then((res)=>{
                setResponseData(res.data.data)
                setResponseMsg(res.data.message)
        })
        .catch((err)=>{
            console.log(err);
            setResponseMsg(err.response.data.message  || " Internal error" )
        })
    }
    return (
        <div>
            <h1>get Comp</h1>
            <button onClick={handleSubmit} >User detail</button>
            <h1>{responseMsg}</h1>
            {responseData.map((item, index)=>{
                return(
                    <>
                        <div key={index} >
                                <h3> {item.username} </h3>
                                <h3> {item.email} </h3>
                                <h3> {item.role} </h3>
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default GetCallUsingToken;