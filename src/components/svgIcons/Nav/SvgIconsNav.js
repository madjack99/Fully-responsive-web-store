import React from 'react';

import Auto from './iconComponents/Auto';
import Beauty from './iconComponents/Beauty';
import Catalog from './iconComponents/Catalog';
import Entertainment from './iconComponents/Entertainment';
import Health from './iconComponents/Health';

const SvgIconsNav = ({ name, ...props }) => {
  switch (name) {
    case 'Авто':
      return <Auto {...props} />;
    case 'Красота':
      return <Beauty {...props} />;
    case 'Каталог':
      return <Catalog {...props} />;
    case 'Развлечения':
      return <Entertainment {...props} />;
    case 'Здоровье':
      return <Health {...props} />;
    default:
      return null;
  }
};

export default SvgIconsNav;
