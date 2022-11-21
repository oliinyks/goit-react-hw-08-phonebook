import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate replace to="/login" />;
}

export default PrivateRoute;