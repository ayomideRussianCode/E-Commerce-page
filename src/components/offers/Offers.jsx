import React from 'react';
import './Offers.css';
import exclusive_image from '../asset/Assets/exclusive_image.png';

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY OUR BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=''/>
        </div>
    </div>
  )
}