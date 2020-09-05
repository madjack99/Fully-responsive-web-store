import React from 'react';

import { discountCardsInfo } from '../../settings';

import './style.css';

const DiscountCard = () => {
  const renderDiscountCards = () =>
    discountCardsInfo.map((card, index) => {
      return (
        <div className='DiscountCard' key={index}>
          <div className='DiscountCard-before' />
          <h3 className='DiscountCard-title'>{card.title}</h3>
          <p className='DiscountCard-message'>{card.message}</p>
          <p className='DiscountCart-amount'>{card.amount}</p>
          <p className='DiscountCart-description'>{card.description}</p>
          <div className='DiscountCard-after' />
        </div>
      );
    });

  return <>{renderDiscountCards()}</>;
};

export default DiscountCard;
