import React, { useState } from 'react';
import classNames from 'classnames';

import { discountCardsInfo } from '../../settings';

import './style.css';

const DiscountCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const renderDiscountCards = () =>
    discountCardsInfo.map((card, index) => {
      return (
        <div
          className={`DiscountCard ${
            index === selectedCard ? 'DiscountCard_active' : ''
          }`}
          key={index}
          onClick={() => setSelectedCard(index)}
        >
          <div
            className={classNames('DiscountCard-before', {
              'DiscountCard-before_active': index === selectedCard,
            })}
          />
          <h3 className='DiscountCard-title'>{card.title}</h3>
          <p className='DiscountCard-message'>{card.message}</p>
          <p className='DiscountCard-amount'>{card.amount}</p>
          <p className='DiscountCard-description'>{card.description}</p>
          <div
            className={classNames('DiscountCard-after', {
              'DiscountCard-after_active': index === selectedCard,
            })}
          />
        </div>
      );
    });

  return <>{renderDiscountCards()}</>;
};

export default DiscountCard;
