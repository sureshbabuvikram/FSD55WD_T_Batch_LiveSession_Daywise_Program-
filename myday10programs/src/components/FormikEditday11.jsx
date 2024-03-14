import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import *  as Yup from 'yup';
import { useFormik } from 'formik';

const FormikEditday11 = ({id}) => {
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

    useEffect(()=>{
            formik.setValues(editData)  //formik.values  -> formik.setValues(editData)
    },[editData])


    const validationSchema=Yup.object().shape({
        product_id:Yup.string().required('product_id is required'), //formik.errors
        product_name:Yup.string().required('product_name is required'),
        product_price:Yup.string().required('product_price is required'),
        product_description:Yup.string().required('product_description is required'),
    })



    const formik= useFormik({
        initialValues:{
            product_id:'',
            product_name:'',
            product_price:'',
            product_description:''},  //formik.values  
        validationSchema,
        onSubmit:async(values)=>{
            await axios.put(`https://65d582ef3f1ab8c63437230e.mockapi.io/api/products/${id}`, values)
                    .then(res=>console.log(res.data))
                .catch((err)=>console.log(err))
                
                navigate('/products')
        }
    })
    // const handleChange=(e)=>{
    //        const{name, value}= e.target  // e.target.name   e.target.value  
    //        setEditData((preData)=>({
    //         ...preData,[name]:value  // product_price : 44000
    //        }))  
    // }
    // const handleFormSubmit=async(e)=>{
    //         e.preventDefault()
    //         await axios.put(`https://65d582ef3f1ab8c63437230e.mockapi.io/api/products/${id}`, editData)
    //         .then(res=>console.log(res.data))
    //         .catch((err)=>console.log(err))
            
    //         navigate('/products')
    // }
    return (
        <div>
          <form onSubmit={formik.handleSubmit} >
                <label>productId:
                    <input type='text' name='product_id' value={formik.values.product_id} onChange={formik.handleChange} /> 
                     </label>
                     <br />
                     <div className='text-danger'>{formik.errors.product_id} </div>
                     <label>product Name:
                    <input type='text' name='product_name' value={formik.values.product_name} onChange={formik.handleChange} /> 
                     </label>
                     <br />
                     <div className='text-danger'>{formik.errors.product_name} </div>

                     <label>product price:
                    <input type='text' name='product_price' value={formik.values.product_price} onChange={formik.handleChange} /> 
                     </label>
                     <br />
                     <div className='text-danger'>{formik.errors.product_price} </div>
                     
                     <label>product description:
                    <input type='text' name='product_description' value={formik.values.product_description} onChange={formik.handleChange} /> 
                     </label>
                     <br />
                     <div className='text-danger'>{formik.errors.product_description} </div>

                     <button type='submit' >update</button>
            </form>
        </div>
    );
};

export default FormikEditday11;