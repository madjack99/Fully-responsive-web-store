import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { useShopDepartmentContext } from '../../../contexts/shopDepartment';

import './style.css';
import search from './search.svg';

const Header = () => {
  const [yOffset, setYoffset] = useState(0);

  const [shopDepartment] = useShopDepartmentContext();

  const isScrolled = yOffset > 62;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setYoffset(window.pageYOffset);
  };

  return (
    <header className={classNames('Header', { Header_scrolled: isScrolled })}>
      <h2 className='Header-title'>{shopDepartment}</h2>
      <form className='ShopSearch'>
        <img
          src={search}
          className={classNames('ShopSearch-image', {
            'ShopSearch-image_hidden': isScrolled,
          })}
          alt='search shop'
        />
        <input
          type='text'
          className={classNames('ShopSearch-input', {
            'ShopSearch-input_scrolled': isScrolled,
          })}
          placeholder='Какой магазин вам нужен?'
        />
      </form>
    </header>
  );
};

export default Header;
