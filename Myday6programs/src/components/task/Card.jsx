import React from 'react';

const Card = ({item,index}) => {
    return (
        <div>
              <div key={index} >
                            <img src={item.image} />
                            <h1>{item.head}</h1>
                            <h1>{item.content}</h1>
                        </div>
        </div>
    );
};

export default Card;