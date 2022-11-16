import css from './RegisterForm.module.css';
import Button from 'components/CommonComponents/Button';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {selectIsLoggedIn} from 'redux/auth/selectors';

export default function RegisterForm() {
  const dispatch = useDispatch();
	const isLoginSuccess = useSelector(selectIsLoggedIn);
	const navigate = useNavigate();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

	 if (isLoginSuccess) {
		form.reset();
		navigate("/contacts", { replace: true });
	 }
  };

  return (
    <div className={css.box}>
      <form className={css.formBox} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={css.title}>Registration</h2>
        <label className={css.label} htmlFor={nameInputId}>
          Username
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          id={nameInputId}
          required
        />

        <label className={css.label} htmlFor={emailInputId}>
          Email
        </label>
        <input
          className={css.input}
          type="email"
          name="email"
          id={emailInputId}
          pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
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
          <Link className={css.link} to="/">
            <Button type="button">Go Back</Button>
          </Link>
          <button className={css.button} type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
