import React from 'react';
import Advert from '../../images/amazon-ads.jpeg';
import './Checkout.css';
import Items from './Items';

function Checkout() {
  return (
        <div className="checkout_container">
            <div className="checkout_header">
                <div className="advert"> 
                  <img src={Advert} alt="Advert"/>
                </div>
                <div className="price">
                    <p>Subtotal (2 items) <b>$23.92</b></p>
                    <div className='flex items-center'>
                        <input type="checkbox"/>
                        <span className='pl-2'>This order contains a gift</span>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
            <h1 className='font-bold text-2xl'>Your Shopping Basket</h1>
            <div>
                <Items/>
            </div>
        </div>
  )
}

export default Checkout