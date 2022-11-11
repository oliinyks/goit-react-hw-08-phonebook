import css from './RegisterForm.module.css';
import { nanoid } from 'nanoid';
import Button from 'components/CommonComponents/Button'

export default function RegisterForm() {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label} htmlFor={nameInputId}>
        Username
      </label>
      <input
        className={css.input}
        type="text"
        //   value={name}
        //   onChange={handleInputChange}
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
		<Button type="submit">Register</Button>
    </form>
  );
}
