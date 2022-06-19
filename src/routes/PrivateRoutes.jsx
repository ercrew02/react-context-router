import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const { token } = useSelector((state) => state.login);

  const useAuth = () => {
    if (token) {
      return true;
    }
    return false;
  };

  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
