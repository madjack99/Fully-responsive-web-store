import React, { useContext, createContext, useState } from 'react';

const ShopDepartmentContext = createContext(null);

export const useShopDepartmentContext = () => useContext(ShopDepartmentContext);

const ShopDepartmentContextProvider = ({ children }) => {
  const [shopDepartment, setShopDepartment] = useState('Каталог');

  return (
    <ShopDepartmentContext.Provider value={[shopDepartment, setShopDepartment]}>
      {children}
    </ShopDepartmentContext.Provider>
  );
};

export default ShopDepartmentContextProvider;
