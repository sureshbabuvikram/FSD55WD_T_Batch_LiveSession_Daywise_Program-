// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../features/Example2ReduxOp/ProductSlice';

const Card = () => {
    // const[data, setData]= useState([])
    const ProductData= useSelector((state)=>state.proReducer.data)
    const status = useSelector((state)=>state.proReducer.status)
    const error = useSelector((state)=>state.proReducer.error)

    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(fetchProduct())
    },[dispatch])

    if(status==='loading'){
        return <div>loading.....</div>
    }

    if(status==='failed'){
        return <div>Error:{error} </div>
    }

    // const handleClick=()=>{


    //    dispatch(createProduct(formdata))
    // }

   
    return (
        <div>
            <h1>card data</h1>
            {ProductData.map((item, index)=>{
                return (
                    <>
                        <div key={index}>
                            <li>{item.product_id}</li>
                            <li>{item.product_name}</li>
                            <li>{item.product_price}</li>
                            <img src={item.product_image} />
                        </div>
                    </>
                )
            })}

            {/* <button onClick={handleClick} >create</button> */}
        </div>
    );
};

export default Card;