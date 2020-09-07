import React, { useState } from 'react';
import classNames from 'classnames';

import SideNavMenu from './SideNavMenu';

import burgerMenu from './icons/burger-menu.svg';
import menuExit from './icons/menu-exit.svg';
import logo from './icons/logo.svg';

import './style.css';

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const NavOpenOrCloseIcon = isNavOpen ? menuExit : burgerMenu;

  return (
    <div className={`SideNav ${isNavOpen ? '' : 'SideNav_closed'}`}>
      <div className='SideNav-pop'>
        <img
          className='SideNav-menuIcon'
          src={NavOpenOrCloseIcon}
          alt='open menu'
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </div>
      <div
        className={classNames('LogoContent', {
          LogoContent_closed: !isNavOpen,
        })}
      >
        <img src={logo} alt='logo' />
        <h1
          className={classNames('LogoContent-title', {
            'LogoContent-title_closed': !isNavOpen,
          })}
        >
          BECO
        </h1>
      </div>
      <SideNavMenu setIsNavOpen={setIsNavOpen} />
    </div>
  );
};

export default SideNav;
