import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import css from './AppBar.module.css';

export default function SharedLayout() {
  return (
    <div className={css.box}>
          <nav>
            <Link className={css.link} to="/" end>Home</Link>

            <Link className={css.link} to="/contacts">Contacts</Link>
          </nav>

<nav>
            <Link className={css.link} to="/login">Lodin</Link>
            
				<Link className={css.link} to="/register">Register</Link>

</nav>
    </div>
  );
}
