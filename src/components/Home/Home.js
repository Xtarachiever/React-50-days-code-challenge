import React from 'react'
import Amazon from '../../images/AMAZON.jpeg';
import './Home.css'

function Home() {
  return (
    <div>
        <div className='home_image'>
            <img src={Amazon} alt='e-commerce'/>
        </div>
    </div>
  )
}

export default Home