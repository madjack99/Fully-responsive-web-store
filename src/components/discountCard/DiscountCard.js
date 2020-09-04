import React from 'react';

import './style.css';

const DiscountCard = () => {
  return (
    <>
      <div className='DiscountCard'>
        <div className='DiscountCard-before' />
        <h2 className='DiscountCard-title'>Title</h2>
        <p className='DiscountCard-message'>message</p>
        <p className='DiscountCart-amount'>Amount</p>
        <p className='DiscountCart-description'>Description</p>
        <div className='DiscountCard-after' />
      </div>
    </>
  );
};

export default DiscountCard;
