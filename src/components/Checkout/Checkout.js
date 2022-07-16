import React from 'react';
import Advert from '../../images/amazon-ads.jpeg';
import './Checkout.css';
import Items from './Items';
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../Reducer';

function Checkout() {
    const [{cart}] = useStateValue()
  return (
        <div className="checkout_container">
            <div className="checkout_header">
                <div className="advert"> 
                  <img src={Advert} alt="Advert"/>
                </div>
                <div className="price">
                    <p>Subtotal (2 items): <b>{`$${getCartTotal(cart)}`}</b></p>
                    <div className='flex items-center'>
                        <input type="checkbox"/>
                        <span className='pl-2'>This order contains a gift</span>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
            <h1 className='font-bold text-2xl'>Your Shopping Basket</h1>
            <div>
                {
                    cart.map((item)=>(
                        <Items key={item.id} id={item.id} title={item.title} price={item.price} rating={item.rating}/>
                    ))
                }
            </div>
        </div>
  )
}

export default Checkout