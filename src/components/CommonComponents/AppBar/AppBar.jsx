import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import UserMenu from '../../UserMenu';
import css from './AppBar.module.css';

export default function SharedLayout() {
  return (
    <div className={css.box}>
			<Link className={css.link} to="/contacts">Contacts</Link>
			<UserMenu/>
    </div>
  );
}
