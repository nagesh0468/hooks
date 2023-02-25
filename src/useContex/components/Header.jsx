import React,{useState} from 'react'


function Header() {
  const [click, setClick] =useState(0);

  return (
    <div>
      <h1>{click}</h1>
     <button type='button' click={click} setter={setClick} >increase me</button>
    </div>
  )
}

export default Header