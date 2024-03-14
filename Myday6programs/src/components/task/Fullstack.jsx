import React from 'react';
import Card from './Card';

const Fullstack = ({data}) => {
    const fullstackData= data.filter((item)=>item.head==='Full Stack Development')
    return (
        <div>
            <h1>Full stack</h1>
            {fullstackData.map((item,index)=>{
                return(
                    <>
                        <Card item={item} index={index} />
                    </>
                )
            })}
        </div>
    );
};

export default Fullstack;