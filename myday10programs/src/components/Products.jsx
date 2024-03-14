import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({setId}) => {
    const [products, setProducts] = useState([])
    const[deleteData, setDeleteData] = useState([])
    const navigate= useNavigate()
    useEffect(() => {
        fetchData();
    }, [deleteData])
    const fetchData = async () => {
        await axios.get('https://65d582ef3f1ab8c63437230e.mockapi.io/api/products')
            .then(res => setProducts(res.data))
            .catch((err) => { console.log(err); })
    }
    const handleEdit=(id)=>{
        setId(id)
        navigate(`/edit/${id}`)
    }
    const handleDelete=async(id)=>{
        await axios.delete(`https://65d582ef3f1ab8c63437230e.mockapi.io/api/products/${id}`)
        .then(res=>setDeleteData(res.data))
        .catch((err)=>{console.log(err)})
    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">num</th>
                        <th scope="col">ProductId</th>
                        <th scope="col">ProductName</th>
                        <th scope="col">ProductPrice</th>
                        <th scope="col">ProductDescription</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.product_id}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.product_price}</td>
                                    <td>{item.product_description}</td>
                                    <td><button onClick={()=>{handleEdit(item.id)}} >Edit</button></td>
                                    <td><button onClick={()=>{handleDelete(item.id)}} >Delete</button></td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>

            <button onClick={()=>{navigate('/create')}}  >Create</button>
        </div>
    );
};

export default Products;