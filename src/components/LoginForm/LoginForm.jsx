import css from './LoginForm.module.css';
import { nanoid } from 'nanoid';
import Button from 'components/CommonComponents/Button';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import {useAuth} from 'hooks/useAuth';

export default function LoginForm() {
  const dispatch = useDispatch();
  const {isLoggedIn} = useAuth;

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
	 const form = e.currentTarget;
	dispatch(logIn({ 
		email: form.elements.email.value, 
		password: form.elements.password.value,  
	}));
	if (isLoggedIn) {
			form.reset();
	 }
  };

  return (
	<div className={css.box}>
    <form onSubmit={handleSubmit} autoComplete="off" className={css.formBox}>
		<h2 className={css.title}>Login</h2>
      <label className={css.label} htmlFor={emailInputId}>
        Email
      </label>
      <input
        className={css.input}
        type="email"
        name="email"
        id={emailInputId}
        required
      />

      <label className={css.label} htmlFor={passwordInputId}>
        Password
      </label>
      <input
        className={css.input}
        type="password"
        name="password"
        id={passwordInputId}
        required
      />
		<div className={css.buttonBox}>
      <button className={css.button} type="submit">Log In</button>
      <Link className={css.link} to="/">
		<Button type="button">Go Back</Button></Link>
		</div>
    </form>
	</div>
  );
}
