import React from 'react';

import './style.css';
import search from './search.svg';

const Header = () => {
  return (
    <header className='Header'>
      <h2 className='Header-title'>Развлечения</h2>
      <form className='ShopSearch'>
        <img src={search} className='ShopSearch-image' alt='search shop' />
        <input
          type='text'
          className='ShopSearch-input'
          placeholder='Какой магазин вам нужен?'
        />
      </form>
    </header>
  );
};

export default Header;
