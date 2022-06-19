import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoutes() {
  const { token } = useSelector((state) => state.login);

  const useAuth = () => {
    if (token) {
      return true;
    }
    return false;
  };
  const auth = useAuth();

  return auth ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoutes;
