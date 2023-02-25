import React from 'react'
import './nav.css';
import Header from './Header';


function Nav({click,setter}) {
  console.log("click",click);
  
  return (
    <div className='nav_bar'
    >
        <a>home</a>
        <a>About</a>
        <a>Contact</a>
        <img src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png' height='150px' width='100px' />
        
    </div>
  )
}

export default Nav 