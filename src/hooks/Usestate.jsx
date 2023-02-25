import React from 'react'
import { useState,useEffect } from 'react';
function Hustate() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Nani");
  
    const increment = () => {
      setCount(prev => prev + 1);
    }
    const decrement = () => {
      setCount(prevCount => prevCount - 1);
      if (count <= 0) {
        setCount(0);
      }
    }
    const changeName = (e) => {
      setName(e.target.value);
    }
    useEffect(() => {
      console.log(count,name);
      
    }, [count,name]);


  return (
    <div>
      
      <h1>counting</h1>
      
      <h3>{name}</h3>
      <input onChange={changeName}  />
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment} >+</button>
    
    </div>
  )
}

export default Hustate;
