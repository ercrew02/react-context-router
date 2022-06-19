import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavbarIndex from '../components/layout';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import ProtectedRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<NavbarIndex />}>
          <Route path="/" element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Route>

      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
