import { useDispatch, useSelector } from 'react-redux';
import {logOut} from 'redux/auth/operations'
import {selectUser} from 'redux/auth/selectors'
import Button from 'components/CommonComponents/Button';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUser);

  return (
    <div>
      <span className={css.userName}>Hi, {name}</span>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </div>
  );
}

//acrsdfoss@mail.com
//examplepwd12345dfesdfsdfsdfd