import React from 'react';

import burgerMenu from './icons/burger-menu.svg';

import './style.css';

const SideNav = () => {
  return (
    <div className='SideNav'>
      <div className='SideNav-pop'>
        <img className='SideNav-menuIcon' src={burgerMenu} alt='open menu' />
      </div>
    </div>
  );
};

export default SideNav;
