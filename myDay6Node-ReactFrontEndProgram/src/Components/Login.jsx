import React,{useState} from 'react';
import axios from 'axios';

const Login = ({setToken}) => {
    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')
    const[responseMsg, setResponseMsg]= useState('')
    

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("login api payloads", password, email);
        const payloads= {password,email}
        await axios.post('http://localhost:4000/api/user/login', payloads)
        .then((res)=>{setResponseMsg(res.data.message)
        setToken(res.data.token)})
        .catch((err)=>{
            console.log(err);
            setResponseMsg(err.response.data.message)
        })
    }

    return (
        <div>
            <h1>User login </h1>
            <form onSubmit={handleSubmit}>
                <label> email <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required /> </label> <br />
                <label> password <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required /> </label> <br />
                <button type='submit' > Login </button>
            </form>

            <h1> {responseMsg} </h1>
        </div>
    );
};

export default Login;