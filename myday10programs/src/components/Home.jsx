import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        await axios.get('https://65d582ef3f1ab8c63437230e.mockapi.io/api/products')
            .then(res => setProducts(res.data))
            .catch((err) => { console.log(err); })
    }
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {products.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div class="col">
                                    <div class="card">
                                        <img src={item.product_image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.product_name}</h5>
                                            <h5 class="card-title">{item.product_price}</h5>
                                            <p class="card-text">{item.product_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    );
};

export default Home;