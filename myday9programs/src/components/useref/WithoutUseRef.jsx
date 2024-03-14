import React, { useEffect, useRef, useState } from 'react';

const WithoutUseRef = () => {
    // const[inputValue, setInputValue]= useState('')
    const[data, setData] = useState(0)
    const myRef= useRef()
    const refinputvalue= useRef()

    useEffect(()=>{
        myRef.current.focus();
    },[])

    const handleClick=()=>{
        console.log(myRef.current.value);
        refinputvalue.current = myRef.current.value
        
        setData(data=>data+1) // single state
    }

    // const handleChange=(e)=>{
    //         setInputValue(e.target.value)
    // }
    return (
        <div>
            <h1> Without useref</h1>
            {/* <input type='text' value={inputValue} onChange={handleChange} /> */}
            <input type='text' placeholder='enter username' ref={myRef} />
            <input type='text' placeholder='enter password'  />
            <button  onClick={handleClick} >click</button>
            <div>
                {/* {inputValue} */}
                { refinputvalue.current}
            </div>
        </div>
    );
};

export default WithoutUseRef;