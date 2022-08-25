import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"



function Header() {
  return (
    <nav className="header">
      <Link to="/">
      <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>npm 
      </Link>  
       
   
   {/*searchbar*/}

   <input type="text"  className="header_search"/>
   {/*other nav component*/}

   <div  className="header_nav">

     {/*link 1*/}
    
     <Link to="/login" className='header_link'>
     <div className='header_option'>
     <span className='header_optionone'>Hello</span>
     <span className='header_optiontwo'>Sign in</span>
       </div>
     </Link>
    {/*link 2*/}

     <Link to="/" className='header_link'>
     <div className='header_option'>
     <span className='header_optionone'>return</span>
     <span className='header_optiontwo'>& orders</span>
       </div>
     </Link>
      {/*link 3*/}
     <Link to="/" className='header_link'>
     <div className='header_option'>
     <span className='header_optionone'>Your</span>
     <span className='header_optiontwo'>Prime</span>
       </div>
     </Link>

     <Link to="/checkout" className='header_link'>
     <div className='header_option'>
     <span className='header_optionone'></span>
     <span className='header_optiontwo'>0</span>
       </div>
     </Link>

     </div>
    </nav>
  )
}

export default Header