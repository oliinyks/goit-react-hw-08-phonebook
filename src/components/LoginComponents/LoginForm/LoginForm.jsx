import css from './LoginForm.module.css';
import { nanoid } from 'nanoid';
import Button from 'components/CommonComponents/Button'

export default function LoginForm() {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">

      <label className={css.label} htmlFor={emailInputId}>
        Email
      </label>
      <input
        className={css.input}
        type="email"
        //   value={name}
        //   onChange={handleInputChange}
        name="name"
        id={emailInputId}
        required
      />

      <label className={css.label} htmlFor={passwordInputId}>
        Password
      </label>
      <input
        className={css.input}
        type="password"
        //   value={name}
        //   onChange={handleInputChange}
        name="name"
        id={passwordInputId}
        required
      />
		<Button type="submit">Log In</Button>
    </form>
  );
}