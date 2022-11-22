import css from './RegisterForm.module.css';
import Button from 'components/CommonComponents/Button';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faTimes,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import { useState } from 'react';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth;
  const [show, setShow] = useState(false);

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const valid = item => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = '1';
    let valid_icon = document.querySelector(`#${item} #faCheck`);
    valid_icon.style.opacity = '1';
    let invalid_icon = document.querySelector(`#${item} #faTimes`);
    invalid_icon.style.opacity = '0';
  };

  const invalid = item => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = '0.5';
    let valid_icon = document.querySelector(`#${item} #faCheck`);
    valid_icon.style.opacity = '0';
    let invalid_icon = document.querySelector(`#${item} #faTimes`);
    invalid_icon.style.opacity = '1';
  };

  const handleInputChange = e => {
    const password = e.target.value;
	 if (password.match(/[A-Z]/) != null) {
		 valid('capital');
		} else {
			invalid('capital');
		}
	 if (password.match(/[$@^!%*?&]/) != null) {
		valid('char');
	 } else {
		invalid('char');
	 }
	 if (password.match(/[0-9]/) != null) {
      valid('num');
    } else {
      invalid('num');
    }
		if (password.length > 8) {
		  valid('more8');
		} else {
		  invalid('more8');
		}
  };

  const showHide = e => {
    setShow(!show);
  };

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

    if (isLoggedIn) {
      form.reset();
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
          type={show ? 'text' : 'password'}
          name="password"
          id={passwordInputId}
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={handleInputChange}
          required
        />
        {show ? (
          <FontAwesomeIcon
            icon={faEye}
            id="showHide"
            onClick={showHide}
            className={css.showHide}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEyeSlash}
            id="showHide"
            onClick={showHide}
            className={css.showHide}
          />
        )}
        <p className={css.validation} id="capital">
          <FontAwesomeIcon
            className={classnames(css.faTimes, css.icon)} id='faTimes'
            icon={faTimes}
          />
          <FontAwesomeIcon
            className={classnames(css.faCheck, css.icon)} id='faCheck'
            icon={faCheck}
          />
          <span className={css.validationTitle}>
            At least one capital letter
          </span>
        </p>
        <p className={css.validation} id="char">
          <FontAwesomeIcon
            className={classnames(css.faTimes, css.icon)} id='faTimes'
            icon={faTimes}
          />
          <FontAwesomeIcon
            className={classnames(css.faCheck, css.icon)} id='faCheck'
            icon={faCheck}
          />
          <span className={css.validationTitle}>
            At least one special symbol
          </span>
        </p>
        <p className={css.validation} id="num">
          <FontAwesomeIcon
            className={classnames(css.faTimes, css.icon)} id='faTimes'
            icon={faTimes}
          />
          <FontAwesomeIcon
            className={classnames(css.faCheck, css.icon)} id='faCheck'
            icon={faCheck}
          />
          <span className={css.validationTitle}>
            At least one numeric value
          </span>
        </p>
        <p className={css.validation} id="more8">
          <FontAwesomeIcon
            className={classnames(css.faTimes, css.icon)} id='faTimes'
            icon={faTimes}
          />
          <FontAwesomeIcon
            className={classnames(css.faCheck, css.icon)} id='faCheck'
            icon={faCheck}
          />
          <span className={css.validationTitle}>
            The total length should be greater than 8
          </span>
        </p>

        <div className={css.buttonBox}>
          <button className={css.button} type="submit">
            Register
          </button>
          <Link className={css.link} to="/">
            <Button type="button">Go Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
