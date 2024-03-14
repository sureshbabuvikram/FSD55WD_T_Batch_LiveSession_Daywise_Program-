import axios from 'axios';
import React, {useState} from 'react';

const PostCall = () => {
    const [postCallData, setPostCallData] = useState([])
    const [postCallMsg, setPostCallMsg] = useState('')
    const handleSubmit=()=>{
        postCall();
    }

    const postCall=async()=>{
        const payload= {firstName:'vel ', lastName:'ponnusamy', email:'vel@gmail.com', designation:'Team Lead'}
        axios.post('https://fsd55fsbe.onrender.com/api/create-emp',payload)
        .then((res)=>{setPostCallData(res.data.data)
            setPostCallMsg(res.data.message)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <div>
            <h1>Post Call Component</h1>
            <button onClick={handleSubmit} > Add Employee </button>
            <h1> {postCallMsg} </h1>
            {postCallData.map((item, index)=>{
                return(
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

export default PostCall;