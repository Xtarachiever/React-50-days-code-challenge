import React from 'react';
import Amazon from '../../images/AMAZON.jpeg';
import './Products.css'

function Products({id,title,price,rating}) {
  return (
    <div className='card shadow-2xl'>
        <div className='product_info'>
            <p>{title}</p>
            <p>{price}</p>
            <div className="flex">{
              Array(rating).fill().map((_,i)=>(<p>⭐</p>))
            }</div>
        </div>
        <img src={Amazon} alt="Product" className='w-1/6'/>
        <button>Add to Basket</button>
    </div>
  )
}

export default Products