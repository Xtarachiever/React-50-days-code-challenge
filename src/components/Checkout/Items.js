import React from 'react';
import Dress from '../../images/Dress.jpeg'
import { useStateValue } from '../StateProvider';

function Items({title,rating,price,id}) {
  const [{cart},dispatch] = useStateValue();
  const removeFromCart = () =>{
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id
    })
  }
  return (
    <div className='cart_items'>
        <div className="item_image">
           <img src={Dress} alt="item"/>
        </div>
        <div className='cart_content'>
            <h2>{title}</h2>
            <span><b>{price}</b></span>
            <span>{
                Array(rating).fill().map((_,i)=>(
                  <span key={i}>⭐</span>
                ))
              }</span>
            <button onClick={removeFromCart}>Remove from cart</button>
        </div>
    </div>
  )
}

export default Items