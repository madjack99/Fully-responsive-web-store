import React, { useState } from 'react';

import burgerMenu from './icons/burger-menu.svg';
import menuExit from './icons/menu-exit.svg';

import './style.css';

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const NavOpenOrCloseIcon = isNavOpen ? menuExit : burgerMenu;

  return (
    <div
      className={`SideNav ${isNavOpen ? 'SideNav_opened' : 'SideNav_closed'}`}
    >
      <div className='SideNav-pop'>
        <img
          className='SideNav-menuIcon'
          src={NavOpenOrCloseIcon}
          alt='open menu'
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </div>
    </div>
  );
};

export default SideNav;
