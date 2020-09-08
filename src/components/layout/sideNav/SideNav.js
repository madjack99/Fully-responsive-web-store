import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import SideNavMenu from './SideNavMenu';

import burgerMenu from './icons/burger-menu.svg';
import menuExit from './icons/menu-exit.svg';
import logoSm from './icons/logo-sm.svg';
import logoLg from './icons/logo-lg.svg';

import './style.css';

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const responsiveLogo = windowWidth > 1440 ? logoLg : logoSm;
  const NavOpenOrCloseIcon = isNavOpen ? menuExit : burgerMenu;

  useEffect(() => {
    const handleWidthResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWidthResize);

    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  }, []);

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
        <img src={responsiveLogo} alt='logo' />
        <h1
          className={classNames('LogoContent-title', {
            'LogoContent-title_closed': !isNavOpen,
          })}
        >
          BECO
        </h1>
      </div>
      <SideNavMenu setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
    </div>
  );
};

export default SideNav;
