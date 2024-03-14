import React, { useState } from 'react';
import Card from './Card';

const ConditionalRendering = ({setCartCount,cartCount, setProducts, products}) => {
    
    return (
        <div>
            <h1>Conditional Render</h1>
            {products.map((item, index)=>{
                return(
                    <>
                        <Card item={item} setCartCount={setCartCount} />
                    </>
                )
            })}
        </div>
    );
};

export default ConditionalRendering;