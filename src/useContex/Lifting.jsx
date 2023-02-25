import React from 'react'

function lifting( {title,initialCard,setter} ) {
  return (
    <div
    style={{
        backgroundColor : title===initialCard?'#fff':'#abcd',
        width : '30vw',
        height : '20vh',
       border  : '1px solid',
       borderRadius : '5px',
       boxShadow : '4px 2px 1px rgba(2, 1, 0, 0.3)',
       margin : '10px',
       display : 'flex',
       alignItems : 'center',
       justifyContent : 'center',
       flexDirection : 'column',
       
    }}
    >
        <h2>{title}</h2>
        <button onClick={()=> {setter(title)} } >click</button>
    </div>
  )
}

export default lifting