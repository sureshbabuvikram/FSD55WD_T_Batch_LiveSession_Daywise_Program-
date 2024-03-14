import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({id}) => {
    const navigate= useNavigate()
    const[editData, setEditData]= useState({
        product_id:'',
        product_name:'',
        product_price:'',
        product_description:''
    })
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        await axios.get(`https://65d582ef3f1ab8c63437230e.mockapi.io/api/products/${id}`)
        .then(res=> setEditData(res.data))
        .catch((err)=>console.log(err))
    }

    const handleChange=(e)=>{
           const{name, value}= e.target  // e.target.name   e.target.value  
           setEditData((preData)=>({
            ...preData,[name]:value  // product_price : 44000
           }))  
    }
    const handleFormSubmit=async(e)=>{
            e.preventDefault()
            await axios.put(`https://65d582ef3f1ab8c63437230e.mockapi.io/api/products/${id}`, editData)
            .then(res=>console.log(res.data))
            .catch((err)=>console.log(err))
            
            navigate('/products')
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit} >
                <label>productId:
                    <input type='text' name='product_id' value={editData.product_id} onChange={handleChange} /> 
                     </label>
                     <br />
                     <label>product Name:
                    <input type='text' name='product_name' value={editData.product_name} onChange={handleChange} /> 
                     </label>
                     <br />
                     <label>product price:
                    <input type='text' name='product_price' value={editData.product_price} onChange={handleChange} /> 
                     </label>
                     <br />
                     <label>product description:
                    <input type='text' name='product_description' value={editData.product_description} onChange={handleChange} /> 
                     </label>
                     <br />
                     <button type='submit' >update</button>
            </form>

        </div>
    );
};

export default Edit;