import css from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={css.box}>
      <div className={css.textBox}>
        <h1 className={css.title}>Phonebook</h1>
        <Link className={css.link} to="/login">
          <button className={css.button}>Log in</button>
        </Link>
        <Link className={css.link} to="/register">
          <button className={css.button}>Sign up</button>
        </Link>
      </div>
    </div>
  );
}
