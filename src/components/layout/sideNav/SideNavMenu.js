import React from 'react';
import classNames from 'classnames';

import SvgIconsNav from '../../svgIcons';

import { useShopDepartmentContext } from '../../../contexts/shopDepartment';
import { shopDepartmentTitles } from '../../../settings';

import './style.css';

const SideNavMenu = ({ setIsNavOpen, isNavOpen }) => {
  const [shopDepartment, setShopDepartment] = useShopDepartmentContext();

  const renderNavItems = () =>
    shopDepartmentTitles.map((item, index) => {
      const isNavItemSelected = item === shopDepartment;
      return (
        <div
          className={classNames('MenuItem', { MenuItem_closed: !isNavOpen })}
          key={index}
        >
          <h2
            className={classNames('MenuItem-title', {
              'MenuItem-title_active': isNavItemSelected,
              'MenuItem-title_closed': !isNavOpen,
            })}
            onClick={() => {
              setShopDepartment(item);
              setIsNavOpen(false);
            }}
          >
            <SvgIconsNav
              name={item}
              stroke={isNavItemSelected ? '#34abe0' : undefined}
            />
            <span className='Title-text'>{item}</span>
          </h2>
        </div>
      );
    });

  return <>{renderNavItems()}</>;
};

export default SideNavMenu;
