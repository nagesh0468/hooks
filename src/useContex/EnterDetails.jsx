import React from 'react'

function EnterDetails({field,data,setData}) {
  return (
    <div>
        <span>{field}</span>
        <input type='text' placeholder='pleaseEnter name' onChange={ (e) => {setData({...data,
        name:e.target.value})} } />
       
        <span>{field}</span>
        <input type='email' placeholder='pleaseEnter name' onChange={ (e) => {setData({...data,
        email:e.target.value})} } />
        
        <span>{field}</span>
        <input type='password' placeholder='pleaseEnter name' onChange={ (e) => {setData({...data,
        password:e.target.value})} } />

    </div>
  )
}

export default EnterDetails