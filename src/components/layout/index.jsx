import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function NavbarIndex() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default NavbarIndex;
