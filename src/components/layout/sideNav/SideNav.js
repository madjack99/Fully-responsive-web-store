import React, { useState } from 'react';

import SideNavMenu from './SideNavMenu';

import burgerMenu from './icons/burger-menu.svg';
import menuExit from './icons/menu-exit.svg';
import logo from './icons/logo.svg';

import './style.css';

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const NavOpenOrCloseIcon = isNavOpen ? menuExit : burgerMenu;

  return (
    <div className={`SideNav ${isNavOpen && 'SideNav_closed'}`}>
      <div className='SideNav-pop'>
        <img
          className='SideNav-menuIcon'
          src={NavOpenOrCloseIcon}
          alt='open menu'
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </div>
      <div className='LogoContent'>
        <img src={logo} alt='logo' />
        <h1 className='LogoContent-title'>BECO</h1>
      </div>
      <SideNavMenu />
    </div>
  );
};

export default SideNav;
