import React from 'react';
import Amazon from '../../images/AMAZON.jpeg';
import './Products.css'

function Products() {
  return (
    <div className='card shadow-2xl'>
        <div className='product_info'>
            <p>Title</p>
            <p>$30</p>
            <div className="product_rating">star</div>
        </div>
        <img src={Amazon} alt="Product" className='w-1/6'/>
        <button>Add to Basket</button>
    </div>
  )
}

export default Products