import React, { useState } from 'react';

const InputComponent = ({addTodoData}) => {
    const[title, setTitle]= useState('')
    const[description, setDescription]= useState('')
    const handleSubmit=()=>{
        addTodoData(title, description)
        setTitle('')
        setDescription('')
    }
    return (
        <div>
            <h1>input Comp</h1>
           title: <input type='text' value={title} onChange={e=>setTitle(e.target.value)} /> 
           description: <input type='text' value={description} onChange={e=>setDescription(e.target.value)} />
            <button onClick={handleSubmit} >Add</button>

        </div>
    );
};

export default InputComponent;