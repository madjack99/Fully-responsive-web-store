import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { useShopDepartmentContext } from '../../../contexts/shopDepartment';

import './style.css';
import search from './search.svg';

const Header = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [yOffset, setYoffset] = useState(0);
  const [shopDepartment] = useShopDepartmentContext();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // console.log(yOffset);

  const handleScroll = () => {
    setYoffset(window.pageYOffset);
  };

  return (
    <header className={classNames('Header', { Header_scrolled: yOffset > 62 })}>
      <h2 className='Header-title'>{shopDepartment}</h2>
      <form className='ShopSearch'>
        <img
          src={search}
          className={classNames('ShopSearch-image', {
            'ShopSearch-image_hidden': yOffset > 62,
          })}
          alt='search shop'
        />
        <input
          type='text'
          className={classNames('ShopSearch-input', {
            'ShopSearch-input_scrolled': yOffset > 62,
          })}
          placeholder='Какой магазин вам нужен?'
        />
      </form>
    </header>
  );
};

export default Header;
