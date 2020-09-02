import React from 'react';

import { useShopDepartmentContext } from '../../../contexts/shopDepartment';

import './style.css';
import search from './search.svg';

const Header = () => {
  const [shopDepartment] = useShopDepartmentContext();

  return (
    <header className='Header'>
      <h2 className='Header-title'>{shopDepartment}</h2>
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
