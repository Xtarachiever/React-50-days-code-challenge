import React from 'react';
import Dress from '../../images/Dress.jpeg'

function Items() {
  return (
    <div className='cart_items'>
        <div className="item_image">
           <img src={Dress} alt="item"/>
        </div>
        <div className='cart_content'>
            <h2>Item 1</h2>
            <span><b>$11.96</b></span>
            <span>Rating 5</span>
            <button>Remove from cart</button>
        </div>
    </div>
  )
}

export default Items