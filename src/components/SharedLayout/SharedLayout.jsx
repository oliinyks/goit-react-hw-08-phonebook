import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { GlobalStyle } from 'constants/GlobalStyle';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function SharedLayout() {
  return (
    <>
      <div>
        <header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/login">Lodin</Link>
            <Link to="/register">Register</Link>
          </nav>
        </header>
        <Suspense>
          <Outlet />
        </Suspense>
        <GlobalStyle />
      </div>
      <Footer />
      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
}
