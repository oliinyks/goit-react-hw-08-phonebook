import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../CommonComponents/SharedLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
