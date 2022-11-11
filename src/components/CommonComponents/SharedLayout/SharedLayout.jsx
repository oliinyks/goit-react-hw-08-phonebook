import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'constants/GlobalStyle';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';
import AppBar from 'components/CommonComponents/AppBar';
import 'react-toastify/dist/ReactToastify.min.css';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <>
        <header className={css.header}>
          <AppBar />
        </header>

      <div className={css.container}>
        <main className={css.main}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
        <GlobalStyle />
      </div>

      <Footer />
      <ToastContainer theme="dark" autoClose={3000} pauseOnFocusLoss={false} toastStyle={{ backgroundColor: "rgb(76, 75, 75)" }}/>
    </>
  );
}
