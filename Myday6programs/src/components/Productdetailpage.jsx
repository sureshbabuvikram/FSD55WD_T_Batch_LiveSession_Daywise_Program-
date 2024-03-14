import React from 'react';
import { useNavigate } from 'react-router-dom';

const Productdetailpage = () => {
    const navigate = useNavigate()
    const handleSubmit=()=>{
        navigate('/')
    }
    return (
        <div>
            <h1>product deatil page</h1>
            <button  onClick={handleSubmit} > Home page </button>
        </div>
    );
};

export default Productdetailpage;