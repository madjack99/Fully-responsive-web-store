import React from 'react';
import classNames from 'classnames';

import { useShopDepartmentContext } from '../../../contexts/shopDepartment';
import { shopDepartmentTitles } from '../../../settings';

import './style.css';

const SideNavMenu = ({ setIsNavOpen, isNavOpen }) => {
  const [shopDepartment, setShopDepartment] = useShopDepartmentContext();

  const renderNavItems = () =>
    shopDepartmentTitles.map((item, index) => {
      const imgSrc = require(`./icons/${item}.svg`);
      return (
        <div
          className={classNames('MenuItem', { MenuItem_closed: !isNavOpen })}
          key={index}
        >
          <h2
            className={classNames('MenuItem-title', {
              'MenuItem-title_active': item === shopDepartment,
              'MenuItem-title_closed': !isNavOpen,
            })}
            onClick={() => {
              setShopDepartment(item);
              setIsNavOpen(false);
            }}
          >
            <img src={imgSrc} alt={item} className='MenuItem-image' />
            <span className='Title-text'>{item}</span>
          </h2>
        </div>
      );
    });

  return <>{renderNavItems()}</>;
};

export default SideNavMenu;
