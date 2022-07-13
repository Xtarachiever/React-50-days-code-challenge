import React from 'react';
import Advert from '../../images/amazon-ads.jpeg';
import './Checkout.css'

function Checkout() {
  return (
        <div className="checkout_container">
            <div className="advert"> 
               <img src={Advert} alt="Advert"/>
            </div>
            <div className="price">
                <p>Subtotal (2 items) $23.92</p>
                <div>
                    <input type="checkbox"/>
                    <span>This order contains a gift</span>
                </div>
                <button>Proceed to Checkout</button>
            </div>
        </div>
  )
}

export default Checkout