import React from 'react';

import Header from './layout/header';
import SideNav from './layout/sideNav';
import DiscountsArea from './discountsArea';

import ShopDepartmentContextProvider from '../contexts/shopDepartment';

import './App.css';

function App() {
  return (
    <div className='App'>
      <ShopDepartmentContextProvider>
        <SideNav />
        <Header />
        <DiscountsArea />
      </ShopDepartmentContextProvider>
    </div>
  );
}

export default App;
