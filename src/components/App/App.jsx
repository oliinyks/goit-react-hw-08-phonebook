import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../CommonComponents/SharedLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute  from '../Routes/PrivateRoute';
import RestrictedRoute  from '../Routes/RestrictedRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { NotFound } from 'pages/NotFound/NotFound';
import Loader from 'components/CommonComponents/Loader';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<RestrictedRoute restricted redirectTo="contacts" />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RestrictedRoute restricted redirectTo="contacts" />}>
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<RestrictedRoute restricted redirectTo="contacts" />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<Contacts />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
