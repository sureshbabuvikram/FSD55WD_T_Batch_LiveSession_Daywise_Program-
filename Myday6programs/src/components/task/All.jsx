import React from 'react';
import Card from './Card';

const All = ({data}) => {

    return (
        <div>
            <h1>All component</h1>
            {data.map((item,index)=>{
                return(
                    <>
                      <Card item={item} index={index} />
                    </>
                )
            })}
        </div>
    );
};

export default All;