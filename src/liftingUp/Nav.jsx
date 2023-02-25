import React from 'react';
import '../useContex/components/nav.css'

function  Nav({count,setter}) {
    console.log('count',count);
    
  return (
    <div className='nav_bar'> 
        <a href="#">Home </a>
        <a href="#"> contact </a>
        <a href="#">services</a>
        <img src='https://img.icons8.com/ios/256/shopping-cart.png' height='50px' />
        <span>{count}</span>
    </div>
  )
}

export default  Nav