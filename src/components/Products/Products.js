import React from 'react';
import Amazon from '../../images/AMAZON.jpeg';
import { useStateValue } from '../StateProvider';
import './Products.css'

function Products({id,title,price,rating}) {
  const [{cart},dispatch] = useStateValue();
  const addToCart = () =>{
    dispatch({
      type:'ADD_TO_CART',
      item:{
        id:id,
        title:title,
        price:price,
        rating:rating
      }
    })
  }
  return (
    <div className='card shadow-2xl'>
        <div className='product_info'>
            <p>{title}</p>
            <p>{price}</p>
            <div className="flex">{
              Array(rating).fill().map((_,i)=>(<p key={i}>⭐</p>))
            }</div>
        </div>
        <img src={Amazon} alt="Product" className='w-1/6'/>
        <button onClick={addToCart}>Add to Basket</button>
    </div>
  )
}

export default Products