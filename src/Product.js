import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className='product_info'>
      <p>The Lean Startup</p>   
       <div className='product_price'>
        <small>$</small> 
       <strong>19.99</strong>
      </div>
      <div className='product_rating'>
       <p>*</p>
      </div>
      </div>
      <img  src='https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UL480_FMwebp_QL65_.jpg' alt=''/>
      <button>Add to basket</button>
      </div>
  )
}

export default Product