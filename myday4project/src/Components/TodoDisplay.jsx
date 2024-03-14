import React from 'react';

const TodoDisplay = ({item, index, deletetodoItem}) => {

    return (
        <div>
            <div key={index}>
              <h1>{item.id} </h1>
              <h1>{item.title} </h1>
              <h1>{item.description} </h1>
              <button onClick={()=>{deletetodoItem(item.id)}}>delete</button>           
              <button>edit</button>           

            </div>
        </div>
    );
};

export default TodoDisplay;