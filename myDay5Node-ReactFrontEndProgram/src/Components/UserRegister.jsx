import axios from 'axios';
import React, {useState} from 'react';

const UserRegister = () => {
    const[username, setUsername]= useState('')
    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')
    const[responseMsg, setResponseMsg]= useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("register api payloads", username, password, email);
        const payloads= {username, password,email}

        await axios.post('http://localhost:4000/api/user/register', payloads)
        .then((res)=>setResponseMsg(res.data.message))
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
            <h1> Register Comp</h1>
            <form onSubmit={handleSubmit}>
                <label> username <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required /> </label> <br />
                <label> email <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required /> </label> <br />
                <label> password <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required /> </label> <br />
                <button type='submit' > Register </button>
            </form>

            <h1> {responseMsg} </h1>
        </div>
    );
};

export default UserRegister;