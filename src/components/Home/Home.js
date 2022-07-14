import React from 'react'
import Amazon from '../../images/AMAZON.jpeg';
import Products from '../Products/Products';
import './Home.css'

function Home() {
  return (
    <div>
        <div className='home_image'>
            <img src={Amazon} alt='e-commerce'/>
        </div>
        <div className="product_division">
         <Products id='1' title="Home Essentials Bundle (Non-Stick 2 Slice Sandwuch
          Maker/ Toaster)" price="$30" rating={5}/>
         <Products id='2' title="Bundle (Non-Stick 2 Slice Pizza
          Maker/ Toaster)" price="$10" rating={3}/>
        </div>
        <div className="product_division">
         <Products id='1' title="BTS Sneakers (with post cards of the 7 members)"
          price="$30" rating={5}/>
         <Products id='2' title="Bone straight hair (Different colors available)"
          price="$10" rating={3}/>
          <Products id='2' title="Couple Necklace (5 paires)" price="$18" rating={2}/>
        </div>
    </div>
  )
}

export default Home