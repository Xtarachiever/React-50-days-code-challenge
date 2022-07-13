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
         <Products/>
         <Products/>
        </div>
    </div>
  )
}

export default Home