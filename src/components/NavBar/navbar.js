import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useStateValue } from '../StateProvider';

function Navbar() {
    const [{cart}] = useStateValue();
  return (
    <div className="header">
        <Link to="/home" className="nav_item">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ff9f00" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>eSHOP</span>
        </Link>
        <div className="search">
            <input type="text" placeholder='Search'/>
            <button className=''>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
        <div className="nav_right_content">
            <div className="nav_item">
                <span>Hello Guest</span>
                <Link to="/"><span>Sign in</span></Link>
            </div>
            <div className="nav_item">
                <span>Your</span>
                <span>Shop</span>
            </div>
            <Link to="/checkout" className="nav_item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{cart.length}</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar