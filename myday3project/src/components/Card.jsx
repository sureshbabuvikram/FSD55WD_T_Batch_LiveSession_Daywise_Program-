import React,{useState} from 'react';

const Card = ({item, setCartCount}) => {
    const[status, setStatus]= useState(true)
    const cartAdd=()=>{
        setStatus(false)
        setCartCount(val=>val+1)
    }
    const cartRemove=()=>{
        setStatus(true)
        setCartCount(val=>val-1)
    }
    return (
        <div>
            {/* <h1> card comp</h1> */}
            <div>
            <div key={item.id}>
                            {item.name} : {item.price}
                            {status?<button onClick={cartAdd} >Add to cart</button>
                            :  <button onClick={cartRemove}>Remove from cart</button>}
                        
                      
                        </div>
            </div>
        </div>
    );
};

export default Card;