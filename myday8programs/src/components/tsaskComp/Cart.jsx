import React,{useContext} from 'react';
import { myContext } from '../../App';

const Cart = () => {
    const[data, setData]= useContext(myContext)

    const totalPrice=data.reduce((total, data)=>total + data.price * (data.quantity || 1) , 0)
    const totalQuantity=data.reduce((total, data)=>total + (data.quantity || 1), 0 );
    const handleIncrease=(id, quantity)=>{
            setData(preData=>{
                    return preData.map((item)=>{
                        if(item.id===id){
                              return {...item, quantity:(item.quantity+ 1 || quantity+1)}  
                        }
                        return item
                    })
            })
    }
    const handleDecrease=()=>{
        
    }
    return (
        <div>
            <h1> cart Comp</h1>
            <h1>toatl Quantity:{totalQuantity}</h1>
            <h1>toatl price:{totalPrice}</h1>
            {data.map((item, index)=>{
                return(
                    <>
                        <div key={index}> 
                            <li>{item.id} </li>
                            <li>{item.title} </li>
                            <li>{item.description} </li>
                            <li>{item.price} </li>
                            {item.images.map((img,index)=>{
                                return(
                                    <>
                                        <div key={index}>
                                            <img src={img} />
                                        </div>
                                    </>
                                )
                            })}
                            
                            <button onClick={()=>handleIncrease(item.id, item.quantity || 1)} > + </button>
                            <button onClick={handleDecrease} > - </button>
                        </div>

                    </>
                )
            })}

        </div>
    );
};

export default Cart;