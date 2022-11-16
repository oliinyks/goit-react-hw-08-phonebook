import css from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={css.box}>
      <div className={css.textBox}>
        <h1 className={css.title}>Phonebook</h1>
        <button className={css.button}>
          <Link className={css.link} to="/login">
            Log in
          </Link>
        </button>
        <button className={css.button}>
          <Link className={css.link} to="/register">
            Sign up
          </Link>
        </button>
      </div>
    </div>
  );
}
