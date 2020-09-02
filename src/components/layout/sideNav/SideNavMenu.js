import React from 'react';

import { useShopDepartmentContext } from '../../../contexts/shopDepartment';

import './style.css';

const navItems = ['Каталог', 'Здоровье', 'Красота', 'Развлечения', 'Авто'];

const SideNavMenu = () => {
  const [shopDepartment, setShopDepartment] = useShopDepartmentContext();
  console.log(shopDepartment);

  const renderNavItems = () =>
    navItems.map((item, index) => (
      <div className='MenuItem' key={index}>
        <h2 className='MenuItem-title MenuItem-title_active'>{item}</h2>
      </div>
    ));

  return <>{renderNavItems()}</>;
};

export default SideNavMenu;
