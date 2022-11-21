import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

function RestrictedRoute({ restricted = false, redirectTo }) {
	const { isLoggedIn } = useAuth();
  const shoudRedirect = isLoggedIn && restricted;
  return shoudRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
export default RestrictedRoute;

RestrictedRoute.propTypes = {
  restricted: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
