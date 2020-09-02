import React from 'react';

import { useShopDepartmentContext } from '../../../contexts/shopDepartment';
import { shopDepartmentTitles } from '../../../settings';

import './style.css';

const SideNavMenu = ({ setIsNavOpen }) => {
  const [shopDepartment, setShopDepartment] = useShopDepartmentContext();

  const renderNavItems = () =>
    shopDepartmentTitles.map((item, index) => (
      <div className='MenuItem' key={index}>
        <h2
          className={`MenuItem-title ${
            item === shopDepartment ? 'MenuItem-title_active' : ''
          }`}
          onClick={() => {
            setShopDepartment(item);
            setIsNavOpen(false);
          }}
        >
          {item}
        </h2>
      </div>
    ));

  return <>{renderNavItems()}</>;
};

export default SideNavMenu;
