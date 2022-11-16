import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'constants/GlobalStyle';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import 'react-toastify/dist/ReactToastify.min.css';
import UserMenu from '../../UserMenu';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  const isLoginSuccess = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoginSuccess && (
        <>
          <header className={css.header}>
			 <UserMenu/>
          </header>
        </>
      )}
      <main className={css.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

		{isLoginSuccess && (
      <Footer />
      )}
		
      <GlobalStyle />
      <ToastContainer
        theme="dark"
        autoClose={3000}
        pauseOnFocusLoss={false}
        toastStyle={{ backgroundColor: 'rgb(76, 75, 75)' }}
      />
    </>
  );
}
